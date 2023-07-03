import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';
import { Category } from '../entities/category.entity';
import { Color } from '../entities/color.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Color)
    private colorRepository: Repository<Color>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = new Product();
    product.name = createProductDto.name;
    product.amount = createProductDto.amount;
    product.discount = createProductDto.discount;

    const category = await this.categoryRepository.findOne({
      where: { id: createProductDto.categoryId },
    });
    product.category = category;

    const color = await this.colorRepository.findOne({
      where: { id: createProductDto.colorId },
    });
    product.color = color;

    return this.productRepository.save(product);
  }
}
