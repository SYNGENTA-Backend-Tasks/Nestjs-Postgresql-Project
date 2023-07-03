import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './category.entity';
import { Color } from './color.entity';

@Entity({ name: 'product_master' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

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
