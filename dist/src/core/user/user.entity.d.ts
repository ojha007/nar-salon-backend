import { BaseEntity } from 'typeorm';
import RoleEntity from '../roles/role.entity';
export default class UserEntity extends BaseEntity {
    id: number;
    fullName: string;
    email: string;
    password: string;
    emailVerifiedAt: string;
    phoneNumber: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
    role: RoleEntity;
}
