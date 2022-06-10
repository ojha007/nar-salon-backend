import CategoryService from './category.service';
import { CategoryRequestDto } from './dto/category.request.dto';
export default class CategoryController {
    private readonly service;
    constructor(service: CategoryService);
    index(isActive: string): Promise<import("./category.entity").default[]>;
    create(payload: CategoryRequestDto): Promise<void>;
}
