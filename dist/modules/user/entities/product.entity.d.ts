import { Category } from './category.entity';
import { Color } from './color.entity';
import { BaseEntity } from './base-entity';
export declare class Product extends BaseEntity {
    name: string;
    category: Category;
    color: Color;
    amount: number;
    discount: number;
}
