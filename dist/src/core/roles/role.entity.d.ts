import { BaseEntity } from 'typeorm';
export default class RoleEntity extends BaseEntity {
    id: number;
    name: string;
}
