import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { Prediction } from "@/models/Prediction";
import { predictRank, PredictionInput, Category } from "@/lib/predictor";
import { GATE_BRANCH_DATA } from "@/lib/rankData";

// POST /api/predict — Calculate rank prediction
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { branch, category, marks } = body as PredictionInput;

    // ── Validate Input ──────────────────────────────────
    if (!branch || !category || marks === undefined) {
      return NextResponse.json(
        { error: "Branch, category, and marks are required" },
        { status: 400 }
      );
    }

    if (!GATE_BRANCH_DATA[branch]) {
      return NextResponse.json(
        { error: `Invalid branch: ${branch}` },
        { status: 400 }
      );
    }

    const validCategories: Category[] = ["general", "obc", "sc_st", "ews"];
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { error: `Invalid category: ${category}` },
        { status: 400 }
      );
    }

    if (typeof marks !== "number" || marks < 0 || marks > 100) {
      return NextResponse.json(
        { error: "Marks must be a number between 0 and 100" },
        { status: 400 }
      );
    }

    // ── Run Prediction Algorithm ────────────────────────
    const result = predictRank({ branch, category, marks });

    // ── Save to DB (if user is authenticated) ──────────
    const session = await getServerSession(authOptions);
    if (session?.user) {
      try {
        await connectDB();

        const dbUser = await User.findOne({ email: session.user.email });

        if (dbUser) {
          const prediction = await Prediction.create({
            userId: dbUser._id,
            branch,
            category,
            marks,
            predictedRank: result.rank,
            rankRange: result.rankRange,
            percentile: result.percentile,
            gateScore: result.gateScore,
            qualified: result.qualified,
          });

          // Link prediction to user
          await User.findByIdAndUpdate(dbUser._id, {
            $push: { predictions: prediction._id },
          });
        }
      } catch (dbError) {
        // Non-fatal: prediction still returned even if save fails
        console.error("DB save error (non-fatal):", dbError);
      }
    }

    // ── Return Result ───────────────────────────────────
    return NextResponse.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Prediction error:", error);
    return NextResponse.json(
      { error: error.message || "Prediction failed" },
      { status: 500 }
    );
  }
}

// GET /api/predict — Get user's prediction history
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const dbUser = await User.findOne({ email: session.user.email });
    if (!dbUser) {
      return NextResponse.json({ predictions: [] });
    }

    const predictions = await Prediction.find({ userId: dbUser._id })
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    return NextResponse.json({ predictions });
  } catch (error) {
    console.error("Fetch predictions error:", error);
    return NextResponse.json(
      { error: "Failed to fetch predictions" },
      { status: 500 }
    );
  }
}
