interface NewsBlock {
    urlToImage: string;
    author: string;
    source: { name: string };
    publishedAt: string;
    title: string;
    description: string;
    url: string;
}

interface SourseInterface {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

interface ViewInterface {
    status: string;
    sources: SourseInterface[];
    totalResults?: number;
    articles?: NewsBlock[];
}

export { NewsBlock, SourseInterface, ViewInterface };
