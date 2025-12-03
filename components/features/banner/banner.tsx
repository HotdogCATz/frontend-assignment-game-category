"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Game } from "@/types/game";
import GameFeature from "../../ui/gameFeature";
import styles from "./banner.module.css";
import { Star } from "lucide-react";
import Link from "next/link";

type bannerProps = React.HTMLAttributes<HTMLDivElement> & {
  games: Game[];
};

export default function Banner({ games: games, ...props }: bannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeGame = games[currentIndex];

  useEffect(() => {
    if (games.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [games.length]);

  if (!activeGame) return null;

  return (
    <div className={`relative w-full max-w-[1400px] mx-auto px-4 md:px-6`} {...props}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Left part */}
        <div className="col-span-1 lg:col-span-2 relative">
          <div className="flex justify-center h-full">
            <div className="relative w-full h-[450px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden group shadow-2xl">
              <Link href={`/games/${activeGame.id}`} className="block w-full h-full">
                
                <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-yellow-500 border border-white/10">
                  <div className="flex gap-2 items-center font-bold">
                    <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-500" />
                    {activeGame.rating}
                  </div>
                </div>

                <div className={styles.bottomGradient}></div>
                
                <Image
                  src={activeGame.thumbnail ?? ""}
                  alt={activeGame.title}
                  width={800}
                  height={600}
                  unoptimized
                  className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Text Content */}
                <div className="absolute bottom-0 z-10 p-6 md:p-8 w-full">
                  <h2 className="text-3xl md:text-5xl font-bold text-center hover:scale-105 transition-transform duration-300 cursor-pointer text-white drop-shadow-lg leading-tight">
                    {activeGame.title.toUpperCase()}
                  </h2>
                  
                  <p className="text-center text-gray-200 mt-2 text-sm md:text-base">
                    {activeGame.category}
                  </p>
                  
                  <div className="w-[50%] md:w-[90%] mx-auto h-px mt-4 bg-white/50" />
                  
                  <p className="mt-4 text-center text-white text-sm md:text-base line-clamp-2 md:line-clamp-3 px-2 md:px-10 opacity-90">
                    {activeGame.description}
                  </p>

                  <div className="flex justify-center gap-2 p-4 flex-wrap mt-2 hidden sm:flex">
                    {activeGame.features?.slice(0, 3).map((feature, index) => (
                      <GameFeature key={index} featureName={feature} />
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right part (List) */}
       <div className="col-span-1 grid gap-3 h-[300px] lg:h-[600px] overflow-y-auto pr-1 custom-scrollbar">
          {games.map((game, index) => (
            <div
              key={game.id}
              onClick={() => setCurrentIndex(index)}
              className={`
                relative flex items-center gap-3 p-2 md:p-3 rounded-xl cursor-pointer transition-all duration-300
                ${
                  index === currentIndex
                    ? "bg-[#1e293b] border-2 border-blue-500 shadow-lg"
                    : "bg-[#0000008a] hover:bg-[#ffffff10] border border-transparent opacity-80 hover:opacity-100"
                }
              `}
            >
              
              <div className="relative w-20 h-14 md:w-24 md:h-16 shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={game.thumbnail ?? ""}
                  alt={game.title}
                  fill
                  sizes="100px"
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
              
              <div className="flex w-full justify-between items-center overflow-hidden">
                <div className="flex flex-col min-w-0 pr-2">
                  <span
                    className={`font-bold truncate text-sm md:text-base ${
                      index === currentIndex ? "text-blue-400" : "text-white"
                    }`}
                  >
                    {game.title}
                  </span>
                  <span className="text-xs text-gray-400 truncate">{game.category}</span>
                </div>
                
                <div className="flex items-center gap-1 text-yellow-500 shrink-0 text-sm font-bold">
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-500" />
                  {game.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}