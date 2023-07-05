import { CategoryService } from '../services/category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    createCategory(createCategoryDto: CreateCategoryDto): Promise<import("../entities/category.entity").Category>;
}
