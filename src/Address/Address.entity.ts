// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { User } from './User.entity';

// @Entity()
// export class Address {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   address: string;

//   @OneToMany(() => User, (user) => user.address)
//   users: User[];
// }

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

  @OneToMany(() => User, (user) => user.address)
  users: User[];
}
