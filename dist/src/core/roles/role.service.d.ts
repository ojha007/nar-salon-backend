import { Repository } from 'typeorm';
import { RoleRequest } from './request/role.request';
import RoleEntity from './role.entity';
export declare class RolesService {
    private repository;
    constructor(repository: Repository<RoleEntity>);
    findAll(): Promise<RoleEntity[]>;
    create(payload: RoleRequest): Promise<boolean>;
}
