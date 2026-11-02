import {
    IApi,
    ItemsListResponse,
    OrderResponse,
    OrderBody,
} from '../../types/index.ts';

export class WebLarekApi {
    private api: IApi;

    constructor(api: IApi) {
        this.api = api;
    }

    getItemList(): Promise<ItemsListResponse> {
        return this.api.get<ItemsListResponse>('/product/');
    }

    sendOrder(data: OrderBody): Promise<OrderResponse> {
        return this.api.post<OrderResponse>('/order/', data);
    }
}
