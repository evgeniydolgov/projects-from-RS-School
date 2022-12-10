import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ViewInterface } from '../../types/index';

class App {
    protected controller: AppController;
    protected view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const documentList: HTMLElement = <HTMLElement>document.querySelector('.sources');
        documentList.addEventListener('click', (event: Event) =>
            this.controller.getNews(event, (data: ViewInterface) => this.view.drawNews(data))
        );
        this.controller.getSources((data: ViewInterface) => this.view.drawSources(data));
    }
}

export default App;
