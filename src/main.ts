import './scss/styles.scss';
import { apiProducts } from './utils/data.ts';
import { Catalog } from './components/Models/Catalog.ts';
import { Basket } from './components/Models/Basket.ts';
import { Buyer } from './components/Models/Buyer.ts';
import { Api } from './components/base/Api.ts';
import { API_URL } from './utils/constants.ts';
import { WebLarekApi } from './components/Communication/WebLarekApi.ts';

// Каталог
const catalogModel = new Catalog();
console.log('============================');
console.log('- ПРОВЕРКА МОДЕЛИ КАТАЛОГА -');

catalogModel.setItems(apiProducts.items);
console.log(`1. Выполнен метод setItems()`);
console.log(`1.1. Получен список товаров: `, catalogModel.getItems());

console.log(
    '2.1. Товар с существующим id: ',
    catalogModel.getItemById('854cef69-976d-4c2a-a18c-2aa45046c390'),
);
console.log(
    '2.2. Товар с несуществующим id: ',
    catalogModel.getItemById('298374892374298374'),
);

catalogModel.setSelectedItem(catalogModel.getItems()[0]);
console.log(`3. Выполнен метод setSelectedItem()`);
console.log('3.1. Выбранный товар: ', catalogModel.getSelectedItem());

// Корзина
const basketModel = new Basket();
console.log('============================');
console.log('- ПРОВЕРКА МОДЕЛИ КОРЗИНЫ -');

const item1 = catalogModel.getItems()[0];
const item2 = catalogModel.getItems()[1];
const item3 = catalogModel.getItems()[2];
basketModel.addToBasket(item1);
basketModel.addToBasket(item2);
basketModel.addToBasket(item3);
console.log('1. В корзину добавлены три товара');
console.log('1.1. Содержимое корзины: ', basketModel.getAddedItems());
console.log('1.2. Общая стоимость: ', basketModel.getTotalAmount());
console.log('1.3. Общее количество: ', basketModel.getTotalCount());

console.log(
    '2. Cуществует ли товар #1 в корзине: ',
    basketModel.isItemInBasket(catalogModel.getItems()[0].id),
);

basketModel.removeFromBasket(item2);
console.log('3. Товар #2 удален из корзины');
console.log('3.1. Содержимое корзины: ', basketModel.getAddedItems());
console.log(
    '3.2. Проверка, существует ли товар #2 в корзине: ',
    basketModel.isItemInBasket(item2.id),
);
console.log('3.3. Общая стоимость: ', basketModel.getTotalAmount());
console.log('3.4. Общее количество: ', basketModel.getTotalCount());

basketModel.clearBasket();
console.log('4. Корзина очищена');
console.log('4.1. Содержимое корзины: ', basketModel.getAddedItems());

// Покупатель
const buyerModel = new Buyer();
console.log('============================');
console.log('- ПРОВЕРКА МОДЕЛИ ПОКУПАТЕЛЯ -');

console.log(
    '1. Валидация покупателя с пустыми полями: ',
    buyerModel.validateBuyerData(),
);

buyerModel.saveBuyerData({ payment: 'card', email: 'test@example.com' });
console.log('2. Сохранены Метод оплаты и Эл. почта');
console.log('2.1. Результат валидации: ', buyerModel.validateBuyerData());
buyerModel.saveBuyerData({ phone: '8-999-65-12-44' });
console.log('3. Сохранен Номер телефона');
console.log('3.1. Результат валидации: ', buyerModel.validateBuyerData());
buyerModel.saveBuyerData({ address: '' });
console.log('4. Сохранен Адрес со значением "" (пустая строка)');
console.log(
    '4.1. Результат валидации покупателя: ',
    buyerModel.validateBuyerData(),
);

console.log('5. Покупатель: ', buyerModel.getBuyerData());

buyerModel.clearBuyerData();
console.log('6. Данные покупателя очищены');
console.log('6.1. Покупатель: ', buyerModel.getBuyerData());

// Получение данных с сервера
const apiModel = new Api(API_URL);
const webLarekApiModel = new WebLarekApi(apiModel);

webLarekApiModel
    .getItemList()
    .then((data) => {
        catalogModel.setItems(data.items);
        console.log(
            `Массив товаров получен с сервера: `,
            catalogModel.getItems(),
        );
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    });
