import { Component } from "../base/Component";
import { ensureElement } from "../../utils/utils";

type HeaderType = {
    counter: number
}

export class Header extends Component<HeaderType> {
    protected basketButtonElement: HTMLElement;
    protected basketCounterElement: HTMLElement;
    
    constructor(container: HTMLElement, actions: { onBasketClick: () => void } ) {
        super(container)
        this.basketButtonElement = ensureElement('.header__basket', this.container)
        this.basketButtonElement.addEventListener('click', () => { actions.onBasketClick() })
        this.basketCounterElement = ensureElement('.header__basket-counter', this.container)
    }

    set counter(value: number) {
        this.basketCounterElement.textContent = String(value)
    }
}