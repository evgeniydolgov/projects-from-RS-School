import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: 'e8af23d6f3854c11abc516ba150489ac', //  получите свой ключ https://newsapi.org/
        });
    }
}

// 4cc803e1308b41f1bc6a7d776f6c137d

// eee6aa9205b14acf9200563588a82644
export default AppLoader;
