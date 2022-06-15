import { BaseEntity } from 'typeorm';
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
}
