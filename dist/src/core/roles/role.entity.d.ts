import { BaseEntity } from 'typeorm';
import UserEntity from '../user/user.entity';
export default class RoleEntity extends BaseEntity {
    id: number;
    name: string;
    users: UserEntity[];
}
