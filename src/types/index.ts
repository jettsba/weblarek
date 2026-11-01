export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
} 

export interface IBuyer {
  payment: TPayment | "";
  email: string;
  phone: string;
  address: string;
} 

export type TPayment = "card" | "cash"

export type ValidationResult = {
    payment?: "Не выбран вид оплаты";
    email?: "Не указана электронная почта";
    phone?: "Не указан номер телефона";
    address?: "Не указан адрес для доставки";
}

export type ItemsListResponse = {
  total: number;
  items: IProduct[];
}

export type OrderBody = IBuyer &  {
  total: number;
  items: string[];
}

export type OrderResponse = {
  id: string;
  total: number;
}