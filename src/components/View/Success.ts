import { Component } from "../base/Component";
import { ensureElement } from "../../utils/utils";

export type SuccessType = {
    total: number;
}

export class Success extends Component<SuccessType> {
    protected descriptionElement: HTMLElement;
    protected closeButtonElement: HTMLButtonElement;
    
    constructor(container: HTMLElement, actions: { onClose: () => void } ) {
        super(container)
        this.descriptionElement = ensureElement('.order-success__description', this.container)
        this.closeButtonElement = ensureElement<HTMLButtonElement>('.order-success__close', this.container)
        this.closeButtonElement.addEventListener('click', () => { actions.onClose() })
    }

    set total(value: number) {
        this.descriptionElement.textContent = `Списано ${value} синапсов`;
    }
}