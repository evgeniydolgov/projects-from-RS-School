import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: '4cc803e1308b41f1bc6a7d776f6c137d', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
