import React from "react";

type gameFeatureProps = React.HTMLAttributes<HTMLDivElement> & {
  featureName?: string;
};
export default function GameFeature({ featureName = "" }: gameFeatureProps) {
  return (
    <div>
      <div className="flex">
        <p className="text-center shadow-md bg-[#353535] rounded-full p-1 px-4 text-[#aecde0]">{featureName}</p>
      </div>
    </div>
  );
}
