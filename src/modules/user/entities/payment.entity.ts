import { Entity, Column } from 'typeorm';
import { BaseEntity1 } from './base-entity1';

@Entity({ name: 'payment' })
export class Payment extends BaseEntity1 {
  @Column()
  payment_method: string;

  @Column()
  payment_status: string;
}
