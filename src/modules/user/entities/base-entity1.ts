import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseEntity1 {
  @PrimaryGeneratedColumn()
  id: number;
}
