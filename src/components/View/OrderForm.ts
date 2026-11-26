import { ensureElement } from "../../utils/utils";
import { FormType, Form } from "./Form";
import { TPayment } from "../../types";

export type OrderFormType = FormType & {
    payment: TPayment;
}

export class OrderForm extends Form<OrderFormType> {
    protected cardButtonElement: HTMLButtonElement;
    protected cashButtonElement: HTMLButtonElement;
    
    constructor(container: HTMLElement, actions: { 
        onSubmit: () => void
        onInput: (field: string, value: string) => void
        onPaymentSelect: (payment: TPayment) => void
        }) {
        super(container, actions)
        this.cardButtonElement = ensureElement<HTMLButtonElement>('button[name="card"]', this.container)
        this.cardButtonElement.addEventListener('click', () => { actions.onPaymentSelect('card') })
        
        this.cashButtonElement = ensureElement<HTMLButtonElement>('button[name="cash"]', this.container)
        this.cashButtonElement.addEventListener('click', () => { actions.onPaymentSelect('cash') })
    }

    set payment(value: TPayment) {
        this.cardButtonElement.classList.toggle("button_alt-active", value === "card")
        this.cashButtonElement.classList.toggle("button_alt-active", value === "cash")
    }
}