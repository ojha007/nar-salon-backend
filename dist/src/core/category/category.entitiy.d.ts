import { CategoryType } from '../../constants/CategoryType.enum';
export default class CategoryEntity {
    id: number;
    name: string;
    parentId: number;
    type: CategoryType;
    isActive: boolean;
}
