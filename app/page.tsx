"use client";
import { gameService } from "@/services/game.service";
import React, { useState, useEffect } from "react";
import { Game, GameResponse, GameSummary } from "@/types/game";
import Banner from "@/components/features/banner/banner";
import Card from "@/components/features/card/card";
import Link from "next/link";
import Loading from "../components/ui/loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [gameList, setGameList] = useState<GameSummary[]>([]);
  const [suggestGames, setSuggestGames] = useState<Game[]>([]);

  useEffect(() => {
    const initData = async () => {
      try {
        setLoading(true);

        const allGames = await gameService.getAllGames();
        const gamesArray = Array.isArray(allGames)
          ? allGames
          : (allGames as GameResponse).result || [];

        setGameList(gamesArray);

        if (gamesArray.length > 0) {
          const topGames = gamesArray.slice(0, 5);

          const detailedGames = await Promise.all(
            topGames.map((g) => gameService.getGameById(g.id))
          );
          setSuggestGames(detailedGames);
          console.log("=== Featured Games Loaded ===", detailedGames);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    initData();
  }, []);

  return (
    <div className="">
      <main className="">
        <div className="my-4 h-20 w-full px-24 flex items-center bg-linear-to-r from-[#2b2b2e] to-65%">
          <p className="text-3xl font-bold">DISCOVER</p>
        </div>
        <div className="w-screen mb-10">
          {loading ? (
            <div className="">
              <Loading />
            </div>
          ) : (
            <Banner games={suggestGames} />
          )}
        </div>

        <div className="my-4 h-20 w-full px-24 flex items-center bg-linear-to-r from-[#2b2b2e] to-65%">
          <p className="text-3xl font-bold">ALL GAMES</p>
        </div>
        {loading ? (
          <div className="">
            <Loading />
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-16 px-2">
              {gameList.map((game) => (
                <Link
                  href={`/games/${game.id}`}
                  key={game.id}
                  className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <Card game={game} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
