import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';
import { Category } from '../entities/category.entity';
import { Color } from '../entities/color.entity';
export declare class ProductService {
    private productRepository;
    private categoryRepository;
    private colorRepository;
    constructor(productRepository: Repository<Product>, categoryRepository: Repository<Category>, colorRepository: Repository<Color>);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    getProductById(id: number): Promise<Product>;
    updateProduct(id: number, updateProductDto: Partial<CreateProductDto>): Promise<Product>;
    deleteProduct(id: number): Promise<void>;
}
