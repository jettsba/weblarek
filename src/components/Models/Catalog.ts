import { IProduct } from "../../types/index.ts"

export class Catalog {
    private itemsList: IProduct[] = [];
    private selectedItem: IProduct | null = null;

    setItems(items: IProduct[]): void {
        this.itemsList = items
    }

    getItems(): IProduct[] {
        return this.itemsList
    }

    getItemById(id: string): IProduct | null {
        return this.itemsList.find((item) => item.id === id) ?? null
    }

    setSelectedItem(item: IProduct): void {
        this.selectedItem = item
    }

    getSelectedItem(): IProduct | null {
        return this.selectedItem
    }
}