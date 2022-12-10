import { Links, ErrorsNumbers, Generic } from '../../types/index';

class Loader {
    private baseLink: string;
    private options: object;
    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<Date>(
        { endpoint, options = {} }: { endpoint: string; options?: object },
        callback: Generic<Date> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (res.status !== ErrorsNumbers.ok) {
            if (res.status === ErrorsNumbers.Unauthorized || res.status === ErrorsNumbers.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: object, endpoint: string): string {
        const urlOptions: Links = { ...this.options, ...options };
        let url: string = <string>`${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key): void => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }

    load<Date>(method: string, endpoint: string, callback: Generic<Date>, options: object = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
