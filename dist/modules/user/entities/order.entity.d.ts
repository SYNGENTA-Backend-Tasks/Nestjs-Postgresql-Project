import { BaseEntity1 } from './base-entity1';
import { Customer } from './customer.entity';
import { Payment } from './payment.entity';
export declare class Order extends BaseEntity1 {
    product_name: string;
    customer: Customer;
    payment: Payment;
    quantity: number;
    shipping_address: string;
    total_price: number;
}
