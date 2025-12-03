import { GameSummary } from "@/types/game";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  game: GameSummary;
};

export default function Card({ game: game }: CardProps) {
  return (
    <div className="flex flex-col w-[220px] h-full p-1 py-2 rounded-2xl overflow-hidden">
      <div className="relative">
        <div className="absolute top-2 left-2">
          <div className="flex w-15 justify-between bg-black/60 p-1 rounded-md gap-2 text-yellow-500 mr-4">
            <Star />
            {game.rating}
          </div>
        </div>
        <div className=" ">
          <Image
            src={game.thumbnail ?? ""}
            alt={game.title}
            width={500}
            height={500}
            unoptimized
            style={{
              width: "auto",
              height: "300px",
              objectFit: "cover",
            }}
            className="rounded-2xl"
          />
        </div>
        <div className="">
          <div>
            <h3 className="text-2xl mt-1 ">{game.title}</h3>
            <p className="text-sm mt-1 text-[#b4b4b4]">{game.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
