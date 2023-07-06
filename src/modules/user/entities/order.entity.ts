import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity1 } from './base-entity1';
import { Customer } from './customer.entity';
import { Payment } from './payment.entity';

@Entity({ name: 'order' })
export class Order extends BaseEntity1 {
  @Column()
  product_name: string;

  @ManyToOne(() => Customer)
  customer: Customer;

  @ManyToOne(() => Payment)
  payment: Payment;

  @Column()
  quantity: number;

  @Column()
  shipping_address: string;

  @Column()
  total_price: number;
}
