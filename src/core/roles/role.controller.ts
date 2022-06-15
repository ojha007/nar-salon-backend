import { Body, Controller, Get, Post } from '@nestjs/common';
import { Response } from 'src/decorators/response';
import { RoleRequest } from './request/role.request';
import { RolesService } from './role.service';

@Controller('internal/roles')
export default class RoleController {
  constructor(private readonly service: RolesService) {}

  @Get()
  @Response('FETCHED', ['Roles'])
  async index() {
    return await this.service.findAll();
  }

  @Post()
  @Response('CREATED', ['Roles'])
  async create(@Body() payload: RoleRequest) {
    return await this.service.create(payload);
  }
}
