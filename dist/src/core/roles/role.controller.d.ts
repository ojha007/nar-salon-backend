import { RoleRequest } from './request/role.request';
import { RolesService } from './role.service';
export default class RoleController {
    private readonly service;
    constructor(service: RolesService);
    index(): Promise<import("./role.entity").default[]>;
    create(payload: RoleRequest): Promise<boolean>;
}
