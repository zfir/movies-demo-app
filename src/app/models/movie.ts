interface MovieKeys {
    [key: string]: string | number;
}

export interface Movie extends MovieKeys {
    title: string;
    description: string;
    score: number;
}

export class MovieController {
    public static allowedKeys = ["title", "description", "score"];
}
