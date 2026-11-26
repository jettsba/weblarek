import { Form, FormType } from "./Form";

export class ContactsForm extends Form<FormType> {
    constructor(container: HTMLElement, actions: { onSubmit: () => void, onInput: (field: string, value: string) => void } ) {
        super(container, actions)
    }
}