import { ProductService } from '../services/product.services';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../entities/product.entity';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    getProductById(id: number): Promise<Product>;
    updateProduct(id: number, updateProductDto: Partial<CreateProductDto>): Promise<Product>;
    deleteProduct(id: number): Promise<void>;
}
