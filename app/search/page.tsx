import React from "react";
import Link from "next/link";
import { gameService } from "@/services/game.service";
import Card from "@/components/features/card/card";
import { GameSummary } from "@/types/game";
import { SearchX, Gamepad2 } from "lucide-react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  const query = q || "";

  if (!query) {
    return (
      <div className="min-h-screen pt-32 px-4 text-center bg-[#0f1115]">
        <div className="flex flex-col items-center opacity-50">
          <Gamepad2 className="w-16 h-16 mb-4 text-gray-500" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-400">
            Please enter a keyword to search.
          </h1>
        </div>
      </div>
    );
  }

  let searchResults: GameSummary[] = [];
  try {
    const response = await gameService.searchGames(query);
    searchResults = Array.isArray(response)
      ? (response as unknown as GameSummary[])
      : (response as any).result || [];
  } catch (error) {
    console.error("Search Error:", error);
  }

  return (
    <div className="min-h-screen w-full pt-16 pb-20">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 border-b border-white/10 pb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white warp-break-words">
            Search Results for{" "}
            <span className="text-blue-500">&quot;{query}&quot;</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Found <span className="text-white font-bold">{searchResults.length}</span> match(es)
          </p>
        </div>

        {/* Content Section */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {searchResults.map((game) => (
              <Link
                key={game.id}
                href={`/games/${game.id}`}
                className="group hover:scale-[1.02] transition-transform duration-300 block h-full"
              >
                <Card game={game} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <div className="bg-white/5 p-6 rounded-full mb-4">
                <SearchX className="w-12 h-12 md:w-16 md:h-16 opacity-50" />
            </div>
            <p className="text-lg md:text-2xl font-semibold text-center px-4">
              No games found matching &quot;{query}&quot;
            </p>
            <p className="text-sm md:text-base mt-2 text-gray-600 text-center">
              Try checking for typos or using different keywords.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}