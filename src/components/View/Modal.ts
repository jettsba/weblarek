import { Component } from "../base/Component";
import { ensureElement } from "../../utils/utils";

type ModalType = {
    content: HTMLElement
}

export class Modal extends Component<ModalType> {
    protected closeButtonElement: HTMLElement;
    protected contentElement: HTMLElement;
    
    constructor(container: HTMLElement, actions: { onClose: () => void } ) {
        super(container)
        this.container.addEventListener('click', (event) => {
            if (event.target === this.container) {
                actions.onClose() 
            }
        })
        this.closeButtonElement = ensureElement('.modal__close', this.container)
        this.closeButtonElement.addEventListener('click', () => { actions.onClose() })
        this.contentElement = ensureElement('.modal__content', this.container)
        }

    set content(content: HTMLElement) {
        this.contentElement.replaceChildren(content)
    }

    openModal() {
        this.container.classList.add('modal_active')
    }
    
    closeModal() {
        this.container.classList.remove('modal_active')
    }
}