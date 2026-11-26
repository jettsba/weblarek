import { Component } from "../base/Component";
import { ensureElement } from "../../utils/utils";

type BasketType = {
    basketList: HTMLElement[];
    totalPrice: number;
}

export class BasketModal extends Component<BasketType> {
    protected basketListElement: HTMLElement;
    protected basketButtonElement: HTMLButtonElement;
    protected basketTotalElement: HTMLElement;
    
    constructor(container: HTMLElement, actions: { onConfirmClick: () => void } ) {
        super(container)
        this.basketListElement = ensureElement('.basket__list', this.container)
        this.basketButtonElement = ensureElement<HTMLButtonElement>('.basket__button', this.container)
        this.basketButtonElement.addEventListener('click', () => { actions.onConfirmClick() })
        this.basketTotalElement = ensureElement('.basket__price', this.container)
    }

    set basketList(list: HTMLElement[]) {
        if (list.length === 0) {
            this.basketListElement.replaceChildren("Корзина пуста")
        } else {
            this.basketListElement.replaceChildren(...list)
        }
    }

    set totalPrice(value: number) {
        this.basketTotalElement.textContent = `${value} синапсов`
    }

    disableConfirmButton() {
        this.basketButtonElement.disabled = true
    }
    
    enableConfirmButton() {
        this.basketButtonElement.disabled = false
    }
}