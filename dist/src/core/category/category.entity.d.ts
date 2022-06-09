import { CategoryType } from '../../constants/CategoryType.enum';
import { BaseEntity } from 'typeorm';
export default class CategoryEntity extends BaseEntity {
    id: number;
    name: string;
    parentId: number;
    type: CategoryType;
    isActive: boolean;
}
