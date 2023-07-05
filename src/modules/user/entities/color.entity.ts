import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base-entity';

@Entity({ name: 'color' })
export class Color extends BaseEntity {
  @Column()
  name: string;
}
