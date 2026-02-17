import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "GATE 2026 Rank Predictor | AI-Powered Rank Estimation",
  description:
    "Predict your GATE 2026 rank with AI-driven algorithms. Get accurate rank estimates for CSE, DA, ME, ECE, EE, Civil and all branches with college predictions.",
  keywords: ["GATE 2026", "Rank Predictor", "IIT Admissions", "GATE Score", "CSE", "Data Science"],
  openGraph: {
    title: "GATE 2026 Rank Predictor",
    description: "AI-powered GATE rank prediction for all branches",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-void min-h-screen font-body antialiased">
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "rgba(10, 12, 21, 0.95)",
                border: "1px solid rgba(0, 245, 255, 0.2)",
                color: "#F0F2FF",
                backdropFilter: "blur(20px)",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
