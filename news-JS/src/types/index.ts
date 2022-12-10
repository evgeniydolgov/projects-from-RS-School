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

type ViewInterface = {
    status: string;
    sources: SourseInterface[];
    totalResults?: number | string;
    articles?: NewsBlock[];
};

interface Links {
    [key: string]: string;
}

enum ErrorsNumbers {
    ok = 200,
    Unauthorized = 401,
    NotFound = 404,
}

export { NewsBlock, SourseInterface, ViewInterface, Links, ErrorsNumbers };
