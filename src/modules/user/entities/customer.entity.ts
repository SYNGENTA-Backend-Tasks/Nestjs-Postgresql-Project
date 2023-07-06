import { Entity, Column } from 'typeorm';
import { BaseEntity1 } from './base-entity1';

@Entity({ name: 'customer' })
export class Customer extends BaseEntity1 {
  @Column()
  name: string;

  @Column()
  phone_number: number;

  @Column()
  email_id: string;
}
