import { Repository } from 'typeorm';
import UserEntity from './user.entity';
export default class UserService {
    private repository;
    constructor(repository: Repository<UserEntity>);
    findOne(where?: {}): Promise<UserEntity | undefined>;
    count(where?: {}): Promise<number>;
    create(payload: any): Promise<any>;
}
