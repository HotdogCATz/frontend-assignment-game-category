"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error Log:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-white px-4">
      <div className="relative flex flex-col items-center max-w-md text-center">
        <div className="relative mb-6">
          <AlertTriangle className="relative w-20 h-20 text-red-500" />
        </div>

        <h2 className="text-3xl font-bold tracking-widest text-red-500 mb-2 font-mono">
          Something Went Wrong
        </h2>
        <p className="text-gray-400 mb-8">
          Something went wrong while processing your request.
          <br />
          <span className="text-sm text-gray-600 mt-2 block">
            Error Code: {error.digest || "UNKNOWN_ERROR"}
          </span>
        </p>

        <div className="flex justify-center gap-4 w-full">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
