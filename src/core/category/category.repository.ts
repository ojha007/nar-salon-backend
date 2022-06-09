import { BaseEntity, EntityManager, EntityRepository } from 'typeorm';
import CategoryEntity from './category.entity';

@EntityRepository(CategoryEntity)
export default class CategoryRepository extends BaseEntity {}
