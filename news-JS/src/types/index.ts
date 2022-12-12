interface NewsBlock {
    readonly urlToImage: string;
    readonly author: string;
    readonly source: { name: string };
    readonly publishedAt: string;
    readonly title: string;
    readonly description: string;
    readonly url: string;
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

type GenericCallback<Data> = (data: Data) => void;

export { NewsBlock, SourseInterface, ViewInterface, Links, ErrorsNumbers, GenericCallback };
