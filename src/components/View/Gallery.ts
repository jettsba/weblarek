import { Component } from "../base/Component";
import { ensureElement } from "../../utils/utils";

type GalleryType = {
    cardList: HTMLElement[]
}

export class Gallery extends Component<GalleryType> {    
    constructor(container: HTMLElement) {
        super(container)
    }

    set cardList(cardsArray: HTMLElement[]) {
        this.container.replaceChildren(...cardsArray)
    }
}