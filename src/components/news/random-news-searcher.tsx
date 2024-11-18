// RandomNewsSearcher.ts

import { NewsItem } from '../news/types';

export class RandomNewsSearcher {
    private jsonPath: string;

    constructor(jsonPath: string) {
        this.jsonPath = jsonPath;
    }

    async fetchNews(): Promise<NewsItem[]> {
        const response = await fetch(this.jsonPath);
        const news: NewsItem[] = await response.json();
        return news;
    }

    async getRandomNews(count: number = 4): Promise<NewsItem[]> {
        const news = await this.fetchNews();
        const shuffled = news.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count); // Devuelve `count` noticias aleatorias
    }
}
