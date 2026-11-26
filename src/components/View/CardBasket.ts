import { ensureElement } from "../../utils/utils";
import { Card, CardType } from "./Card";

export type CardBasketType = CardType & {
    index: number;
}

export class CardBasket extends Card<CardBasketType>{
    protected indexElement: HTMLElement;
    protected deleteButtonElement: HTMLElement;

    constructor(container: HTMLElement, actions: { onClick: () => void }) {
        super(container)
        this.indexElement = ensureElement(".basket__item-index", this.container);
        this.deleteButtonElement = ensureElement(".basket__item-delete", this.container)
        this.deleteButtonElement.addEventListener('click', () => { actions.onClick() });
    }

    set index(value: number) {
        this.indexElement.textContent = value.toString()
    }
}