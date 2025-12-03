import Loader from "@/components/ui/loader";
import React from "react";

export default function loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Loader text="SEARCHING . . ." />
    </div>
  );
}
