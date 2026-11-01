import './scss/styles.scss';
import { apiProducts } from './utils/data.ts';
import { Catalog } from "./components/Models/Catalog.ts"
import { Basket } from "./components/Models/Basket.ts"
import { Buyer } from "./components/Models/Buyer.ts"


const catalogModel = new Catalog();
console.log("============================")
console.log("- ПРОВЕРКА МОДЕЛИ КАТАЛОГА -")

catalogModel.setItems(apiProducts.items);
console.log(`Массив товаров из каталога: `, catalogModel.getItems())

console.log("Товар с существующим id: ", catalogModel.getItemById("854cef69-976d-4c2a-a18c-2aa45046c390"))
console.log("Товар с несуществующим id: ", catalogModel.getItemById("298374892374298374"))

catalogModel.setSelectedItem(catalogModel.getItems()[0])
console.log("Выбранный товар: ", catalogModel.getSelectedItem())



const basketModel = new Basket()
console.log("============================")
console.log("- ПРОВЕРКА МОДЕЛИ КОРЗИНЫ -")

const item1 = catalogModel.getItems()[0]
const item2 = catalogModel.getItems()[1]
const item3 = catalogModel.getItems()[2]
basketModel.addToBasket(item1)
basketModel.addToBasket(item2)
basketModel.addToBasket(item3)
console.log("В корзину добавлены три товара, содержимое: ", basketModel.getAddedItems())
console.log("Общая стоимость: ", basketModel.getTotalAmount())
console.log("Общее количество: ", basketModel.getTotalCount())

console.log("Проверка: существует ли товар #1 в корзине: ", basketModel.isItemInBasket(catalogModel.getItems()[0].id))

basketModel.removeFromBasket(item2)
console.log("Второй товар удален, содержимое: ", basketModel.getAddedItems())
console.log("Проверка, существует ли второй товар в корзине: ", basketModel.isItemInBasket(item2.id))
console.log("Общая стоимость: ", basketModel.getTotalAmount())
console.log("Общее количество: ", basketModel.getTotalCount())

basketModel.clearBasket()
console.log("Корзина очищена, содержимое: ", basketModel.getAddedItems())



const buyerModel = new Buyer()
console.log("============================")
console.log("- ПРОВЕРКА МОДЕЛИ ПОКУПАТЕЛЯ -")

console.log("Результат валидации покупателя (пустой): ", buyerModel.validateBuyerData())

buyerModel.saveBuyerData({ payment: "card", email: "test@example.com" })
console.log("Результат валидации покупателя: ", buyerModel.validateBuyerData())
buyerModel.saveBuyerData({ phone: "8-999-65-12-44" })
console.log("Результат валидации покупателя: ", buyerModel.validateBuyerData())
buyerModel.saveBuyerData({ address: "" })
console.log(`Тестовый покупатель: `, buyerModel.getBuyerData())

console.log("Результат валидации покупателя: ", buyerModel.validateBuyerData())

buyerModel.clearBuyerData()
console.log("Данные покупателя очищены, результат: ", buyerModel.getBuyerData())