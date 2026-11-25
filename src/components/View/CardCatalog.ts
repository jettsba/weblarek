import { categoryMap, CDN_URL } from "../../utils/constants";
import { ensureElement } from "../../utils/utils";
import { Card, CardType } from "./Card";

export type CardCatalogType = CardType & {
    image: string;
    category: string;
}

export class CardCatalog extends Card<CardCatalogType>{
    protected imageElement: HTMLImageElement;
    protected categoryElement: HTMLElement;

    constructor(container: HTMLElement, actions: { onClick: () => void } ) {
        super(container)
        this.imageElement = ensureElement<HTMLImageElement>(".card__image", this.container);
        this.categoryElement = ensureElement(".card__category", this.container)
        this.container.addEventListener('click', () => { actions.onClick() });
    }

    set image(src: string) {
        this.setImage(this.imageElement, CDN_URL+src)
    }

    set category(value: keyof typeof categoryMap) {
        this.categoryElement.textContent = value
        this.categoryElement.classList.remove(...Object.values(categoryMap))
        this.categoryElement.classList.add(categoryMap[value])
    }

}