import { Component } from "../base/Component";
import { ensureElement } from "../../utils/utils";

export type CardType = {
    title: string;
    price: number | null;
}

export class Card<T extends CardType> extends Component<T> {
    protected titleElement: HTMLElement;
    protected priceElement: HTMLElement;

    constructor(container: HTMLElement) {
        super(container)
        this.titleElement = ensureElement(".card__title", this.container)
        this.priceElement = ensureElement(".card__price", this.container)
    }

    set title(value: string) {
        this.titleElement.textContent = value
    }

    set price(value: number | null) {
        if (value === null) {
            this.priceElement.textContent = "Бесценно"
        } else {
            this.priceElement.textContent = value.toString() + " синапсов"
        }
    }
}