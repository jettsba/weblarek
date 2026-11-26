import { Component } from "../base/Component";
import { ensureElement } from "../../utils/utils";

export type FormType = {
    error: string;
}

export class Form<T extends FormType> extends Component<T> {
    protected errorElement: HTMLElement;
    protected submitButtonElement: HTMLButtonElement;
    
    constructor(container: HTMLElement, actions: { onSubmit: () => void, onInput: (field: string, value: string) => void } ) {
        super(container)
        this.container.addEventListener('input', (e) => { 
            if (e.target instanceof HTMLInputElement) {
                actions.onInput(e.target.name, e.target.value) 
            }
        })
        this.container.addEventListener('submit', (e) => { e.preventDefault(); actions.onSubmit() })
        this.errorElement = ensureElement('.form__errors', this.container)
        this.submitButtonElement = ensureElement<HTMLButtonElement>('button[type="submit"]', this.container)
    }

    set error(err: string) {
        this.errorElement.textContent = err;
    }

    disableSubmit() {
        this.submitButtonElement.disabled = true
    }
    
    enableSubmit() {
        this.submitButtonElement.disabled = false
    }
}