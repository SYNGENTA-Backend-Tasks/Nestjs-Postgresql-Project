import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base-entity';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
  
  @Column()
  name: string;
}
