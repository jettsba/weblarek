import { TPayment, IBuyer, ValidationResult } from '../../types/index.ts';

export class Buyer {
    private payment: TPayment | '' = '';
    private email: string = '';
    private phone: string = '';
    private address: string = '';

    saveBuyerData(data: Partial<IBuyer>): void {
        if (data.payment !== undefined) {
            this.payment = data.payment;
        }
        if (data.email !== undefined) {
            this.email = data.email;
        }
        if (data.phone !== undefined) {
            this.phone = data.phone;
        }
        if (data.address !== undefined) {
            this.address = data.address;
        }
    }

    getBuyerData(): IBuyer {
        return {
            payment: this.payment,
            email: this.email,
            phone: this.phone,
            address: this.address,
        };
    }

    clearBuyerData(): void {
        this.payment = '';
        this.email = '';
        this.phone = '';
        this.address = '';
    }

    validateBuyerData(): ValidationResult {
        const result: ValidationResult = {};
        if (this.payment === '') {
            result.payment = 'Не выбран вид оплаты';
        }
        if (this.email === '') {
            result.email = 'Не указана электронная почта';
        }
        if (this.phone === '') {
            result.phone = 'Не указан номер телефона';
        }
        if (this.address === '') {
            result.address = 'Не указан адрес для доставки';
        }
        return result;
    }
}
