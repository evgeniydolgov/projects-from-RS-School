import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: 'e8af23d6f3854c11abc516ba150489ac',
        });
    }
}

export default AppLoader;
