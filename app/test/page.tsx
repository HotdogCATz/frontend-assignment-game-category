"use client"; // ใช้ Client Component เพื่อความง่ายในการ demo (ใช้ useEffect)

import { useEffect, useState } from "react";
import { gameService } from "@/services/game.service";
import { GameResponse, GameSummary } from "@/types/game";

export default function GameListPage() {
  const [games, setGames] = useState<GameSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [gameList, setGameList] = useState<GameResponse[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await gameService.getAllGames();
        setGames(data.result);
      } catch (error) {
        console.error("Failed to fetch games", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const handleSearch = async (keyword: string) => {
    setLoading(true);
    try {
      const results = await gameService.searchGames(keyword);
      setGameList(results);
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Game List</h1>
      <button onClick={() => handleSearch("Ocean")}>Search Ocean</button>

      {gameList.length > 0 ? (
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.title}</li>
          ))}
        </ul>
      ) : (
        <ul>
          {gameList.map((game, idx) => (
            <li key={idx}>{game.result.map((item) => item.title)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
