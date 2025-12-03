import React from "react";

interface LoadingProps {
  text?: string;
}

export default function Loader({ text = "LOADING . . ." }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full z-50">
      <div className="flex flex-col items-center gap-6">
        
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
          
          <div className="absolute inset-0 border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <p className="text-xs font-medium tracking-[0.4em] text-white/80 uppercase">
            {text}
          </p>
          <div className="h-px w-24 bg-white/10 overflow-hidden relative mt-2">
            <div className="absolute inset-0 bg-white/50 w-full -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
          </div>
        </div>

      </div>
    </div>
  );
}