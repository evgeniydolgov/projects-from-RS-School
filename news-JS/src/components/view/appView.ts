import News from './news/news';
import Sources from './sources/sources';
import { ViewInterface, NewsBlock, SourseInterface } from '../../types/index';

export class AppView {
    public news: News;
    public sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ViewInterface): void {
        const values: NewsBlock[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ViewInterface): void {
        const values: SourseInterface[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
