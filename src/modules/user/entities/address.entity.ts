import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('address')
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  addressId: number;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  pincode: number;

  @ManyToOne(() => User, (user) => user.address)
  users: User;
}
