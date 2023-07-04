import { Entity, Column, ManyToOne } from 'typeorm';
import { Category } from './category.entity';
import { Color } from './color.entity';
import { BaseEntity } from './BaseEntity';

@Entity({ name: 'product_master' })
export class Product extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Category)
  category: Category;

  @ManyToOne(() => Color)
  color: Color;

  @Column()
  amount: number;

  @Column()
  discount: number;
}
