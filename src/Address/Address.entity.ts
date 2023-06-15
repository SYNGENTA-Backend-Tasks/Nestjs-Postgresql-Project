import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../User/User.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  pincode: string;

  @Column({ nullable: false })
  line1: string;

  @Column({ nullable: false })
  line2: string;

  @OneToMany(() => User, (user) => user.address)
  users: User[];
  address: string;
}
