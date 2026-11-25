import { categoryMap, CDN_URL } from "../../utils/constants";
import { ensureElement } from "../../utils/utils";
import { Card, CardType } from "./Card";

export type CardPreviewType = CardType & {
    image: string;
    category: string;
    text: string;
}

export class CardPreview extends Card<CardPreviewType>{
    protected imageElement: HTMLImageElement;
    protected categoryElement: HTMLElement;
    protected textElement: HTMLElement;
    protected basketButtonElement: HTMLButtonElement;

    constructor(container: HTMLElement, actions: { onClick: () => void } ) {
        super(container)
        this.imageElement = ensureElement<HTMLImageElement>(".card__image", this.container);
        this.categoryElement = ensureElement(".card__category", this.container);
        this.textElement = ensureElement(".card__text", this.container);
        this.basketButtonElement = ensureElement<HTMLButtonElement>(".card__button", this.container)
        this.basketButtonElement.addEventListener('click', () => { actions.onClick() });
    }

    set image(src: string) {
        this.setImage(this.imageElement, CDN_URL+src)
    }

    set category(value: keyof typeof categoryMap) {
        this.categoryElement.textContent = value
        this.categoryElement.classList.remove(...Object.values(categoryMap))
        this.categoryElement.classList.add(categoryMap[value])
    }

    set text(text: string) {
        this.textElement.textContent = text
    }

    setButtonText(value: string) {
        this.basketButtonElement.textContent = value
    } 

    disableButton() {
        this.basketButtonElement.disabled = true
    }
    
    enableButton() {
        this.basketButtonElement.disabled = false
    }

}