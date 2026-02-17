import mongoose, { Document, Schema } from "mongoose";

export interface IPrediction extends Document {
  userId: mongoose.Types.ObjectId;
  branch: string;
  category: string;
  marks: number;
  predictedRank: number;
  rankRange: { min: number; max: number };
  percentile: number;
  gateScore: number;
  qualified: boolean;
  createdAt: Date;
}

const PredictionSchema = new Schema<IPrediction>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    branch: {
      type: String,
      required: true,
      enum: ["CSE", "DA", "ME", "ECE", "EE", "CE", "CH", "PI"],
    },
    category: {
      type: String,
      required: true,
      enum: ["general", "obc", "sc_st", "ews"],
    },
    marks: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    predictedRank: {
      type: Number,
      required: true,
    },
    rankRange: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    percentile: {
      type: Number,
      required: true,
    },
    gateScore: {
      type: Number,
      required: true,
    },
    qualified: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Prediction =
  mongoose.models.Prediction ||
  mongoose.model<IPrediction>("Prediction", PredictionSchema);
