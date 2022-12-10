import './sources.css';
import { SourseInterface } from '../../../types/index';

class Sources {
    draw(data: SourseInterface[]) {
        const fragment: DocumentFragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: SourseInterface) => {
            const sourceClone: HTMLElement = <HTMLElement>sourceItemTemp.content.cloneNode(true);

            (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
            (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (<HTMLElement>document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
