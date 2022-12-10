interface NewsBlock {
    urlToImage: string;
    author: string;
    readonly source: { name: string };
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
    totalResults?: number | string;
    articles?: NewsBlock[];
}

type Links = {
    readonly [key: string]: string;
};

enum ErrorsNumbers {
    ok = 200,
    Unauthorized = 401,
    NotFound = 404,
}

type Generic<Date> = (data: Date) => void;

export { NewsBlock, SourseInterface, ViewInterface, Links, ErrorsNumbers, Generic };
