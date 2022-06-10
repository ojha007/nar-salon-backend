import { BaseEntity } from 'typeorm';
export default class CategoryEntity extends BaseEntity {
    static MODEL_NAME: string;
    id: number;
    name: string;
    parent: CategoryEntity;
    children: CategoryEntity[];
    isActive: boolean;
}
