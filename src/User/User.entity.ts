import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Address } from 'src/address/Address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  addressedId: number;

  @ManyToOne(() => Address, (address) => address.users)
  address: Address;
  static entity: any;

}
