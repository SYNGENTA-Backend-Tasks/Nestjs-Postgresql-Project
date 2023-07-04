import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
  
  @Column()
  name: string;
}
