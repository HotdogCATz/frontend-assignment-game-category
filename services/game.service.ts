import axiosInstance from "./axiosInstance";
import { Game, GameResponse } from "../types/game";

export const gameService = {
  // 1. POST /api/games
  getAllGames: async (): Promise<GameResponse> => {
    const response = await axiosInstance.post<GameResponse>("/api/games");
    console.log(response);

    return response.data;
  },

  // 2. GET /api/games/{gameId}
  getGameById: async (gameId: number): Promise<Game> => {
    const response = await axiosInstance.get<Game>(`/api/games/${gameId}`);
    console.log(response);

    return response.data;
  },

  // 3. POST /api/games/search
  searchGames: async (query: string): Promise<GameResponse[]> => {
    const response = await axiosInstance.post<GameResponse[]>(
      "/api/search",
      {},
      {
        params: { query },
      }
    );
    console.log(response);

    return response.data;
  },
};
