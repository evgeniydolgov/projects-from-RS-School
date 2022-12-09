interface Data {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

interface NewsBlock {
    urlToImage: string;
    author: string;
    source: { name: string };
    publishedAt: string;
    title: string;
    description: string;
    url: string;
}

export { Data, NewsBlock };
