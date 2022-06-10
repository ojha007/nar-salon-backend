import { Repository } from 'typeorm';
import CategoryEntity from './category.entity';
import { CategoryRequestDto } from './dto/category.request.dto';
export default class CategoryService {
    private repository;
    constructor(repository: Repository<CategoryEntity>);
    findAll(where?: {}): Promise<CategoryEntity[]>;
    findOne(id: string): Promise<CategoryEntity>;
    remove(id: string): Promise<void>;
    create(payload: CategoryRequestDto): Promise<void>;
}
