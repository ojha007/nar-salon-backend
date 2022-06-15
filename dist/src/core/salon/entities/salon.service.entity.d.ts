import { BaseEntity } from 'typeorm';
export default class SalonServiceEntitiy extends BaseEntity {
    id: number;
    name: string;
    description: string;
    parent: SalonServiceEntitiy;
    children: SalonServiceEntitiy[];
    isActive: boolean;
    createdAt: string;
    updateAt: string;
}
