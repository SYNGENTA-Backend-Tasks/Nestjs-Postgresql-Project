import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity({ name: 'color' })
export class Color extends BaseEntity {
  @Column()
  name: string;
}
