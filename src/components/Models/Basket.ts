import { IProduct } from "../../types/index.ts"

export class Basket {
    private addedItems: IProduct[] = [];

    getAddedItems(): IProduct[] {
        return this.addedItems
    }

    addToBasket(item: IProduct): void {
        this.addedItems.push(item) 
    }

    removeFromBasket(item: IProduct): void {
        this.addedItems = this.addedItems.filter((elem => elem !== item))
    }

    clearBasket(): void {
        this.addedItems = []
    }

    getTotalAmount(): number {
        return this.addedItems.reduce(
            (acc, elem) => acc + (elem.price ?? 0), 0)
    }
     
    getTotalCount(): number {
        return this.addedItems.length
    }
    
    isItemInBasket(id: string): boolean {
        return this.addedItems.some(item => item.id === id)
    }
}