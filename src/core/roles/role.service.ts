import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleRequest } from './request/role.request';
import RoleEntity from './role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private repository: Repository<RoleEntity>,
  ) {}

  async findAll(): Promise<RoleEntity[]> {
    return await this.repository.find();
  }

  async create(payload: RoleRequest): Promise<boolean> {
    await this.repository.save(payload);
    return;
  }
}
