import { gameService } from "@/services/game.service";
import React from "react";
import Image from "next/image";
import GameFeature from "@/components/ui/gameFeature";
import { Star, Calendar, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  
  const game = await gameService.getGameById(id);
  
  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-[#0f1115] pb-20 pt-16">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Browse
        </Link>

        <div className="relative w-full rounded-t-3xl overflow-hidden shadow-2xl">
          <Image
            src={game.thumbnail}
            alt={game.title}
            width={1200}
            height={600}
            unoptimized
            className="transition-all duration-500 ease-in-out hover:scale-105"
            style={{
              width: "100%",
              height: "auto",
              minHeight: "250px",
              maxHeight: "500px",
              objectFit: "cover",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#181b1f] to-transparent opacity-60"></div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#181b1f] rounded-b-3xl overflow-hidden shadow-xl">
          
          <div className="lg:col-span-2 p-6 md:p-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {game.title}
            </h1>
            <p className="mt-2 text-[#a9aaac] text-sm md:text-base">
                Category: <span className="text-white">{game.category}</span>
            </p>
            
            <div className="flex lg:hidden items-center gap-2 my-4 text-yellow-500 font-bold text-lg">
               <Star className="fill-yellow-500" /> {game.rating}
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-3">About this game</h3>
                <div className="p-5 bg-[#23272c] rounded-xl text-gray-300 leading-relaxed text-sm md:text-base">
                    {game.description}
                </div>
            </div>
          </div>

          <div className="lg:col-span-1 p-6 md:p-10 bg-[#1c2025] border-[#2d323b] border-t lg:border-t-0">
            <div className="hidden lg:flex items-center gap-2 mb-6 text-yellow-500 font-bold text-3xl">
              {game.rating} <Star className="w-8 h-8 fill-yellow-500" />
            </div>

            <div className="mb-6">
                <p className="text-gray-400 mb-2 font-medium">Release Date</p>
                <div className="flex items-center gap-2 text-white text-lg">
                    <Calendar className="text-blue-500" />
                    {game.releaseDate || "Coming Soon"}
                </div>
            </div>

            <div>
                <p className="text-gray-400 mb-3 font-medium">Features</p>
                <div className="flex flex-wrap gap-2">
                    {game.features?.map((feature, index) => (
                    <GameFeature key={index} featureName={feature} />
                    ))}
                </div>
            </div>

          </div>

          <div className="col-span-1 lg:col-span-3 p-6 md:p-10 border-t border-[#2d323b]">
            <h3 className="text-2xl font-bold mb-6 text-white">Screenshots</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {game.screenshots?.map((screenshot, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl aspect-video cursor-pointer">
                  <Image
                    src={screenshot}
                    alt={`${game.title} Screenshot ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}