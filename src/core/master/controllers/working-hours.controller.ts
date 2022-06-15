import { Body, Controller, Get, Post } from '@nestjs/common';
import { Response } from 'src/decorators/response';
import { WorkingHoursRequest } from '../request/WorkingHoursRequest';
import WorkingHoursService from '../services/working-hours.service';

@Controller(['master/working-days', 'internal/master/working-days'])
export default class WorkingHoursController {
  constructor(private readonly service: WorkingHoursService) {}

  @Get()
  @Response('FETCHED', ['Working Days'])
  async index() {
    return await this.service.findAll();
  }

  @Post()
  @Response('CREATED', ['Working Days'])
  async create(@Body() payload: WorkingHoursRequest) {
    return await this.service.create(payload);
  }
}
