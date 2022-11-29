export type ProcessedObject = {
    movies: Movie[],
    key: number | undefined
}

export class Movie {
    public static allowedKeys = ["title", "description", "score"];

    public title: string;
    public description: string;
    public score: number;

    constructor(title: string, description: string, score: number) {
        this.title = title;
        this.description = description;
        this.score = score;
    }
}
