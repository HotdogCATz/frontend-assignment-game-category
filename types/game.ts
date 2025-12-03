export interface Game {
    id: number;
    title: string;
    category: string;
    rating: number;
    description: string;
    features: string[];
    releaseDate: string;
    thumbnail: string;
    screenshots: string[];
}

export interface GameSummary {
    id: number;
    title: string;
    category: string;
    rating: number;
    thumbnail: string;
}

export interface GameResponse {
    result: GameSummary[];
    length: number;
    totalPage: number;
}

export interface GetGameResponse {
    data: Game[];
}