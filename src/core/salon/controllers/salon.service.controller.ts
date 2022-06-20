import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Response } from 'src/decorators/response';
import { NoAuth } from 'src/meta/isPublic.meta';
import { SalonServiceRequest } from '../request/SalonServiceRequest';
import SalonService from '../services/salon.service';

@Controller(['internal/salon-services', 'salon-services'])
export default class SalonServiceController {
  constructor(private readonly service: SalonService) {}

  @Get()
  @NoAuth()
  @Response('FETCHED', ['Services'])
  async index() {
    return this.service.findAll();
  }

  @Post()
  @Response('CREATED', ['Services'])
  async create(@Body() payload: SalonServiceRequest) {
    await this.service.create(payload);
    return [];
  }

  @Put(':id')
  @Response('UPDATED', ['Services'])
  async update(@Body() payload: SalonServiceRequest, @Param('id') id: number) {
    await this.service.update(payload, id);
    return [];
  }

  @Put('update-status/:id')
  @Response('UPDATED', ['Service Status'])
  async updateStatus(
    @Body('status') isActive: boolean,
    @Param('id') id: number,
  ) {
    await this.service.updateStaus(id, isActive);
    return [];
  }

  @Delete(':id')
  @Response('DELETED', ['Service'])
  async destroy(@Param('id') id: number) {
    await this.service.delete(id);
    return [];
  }

  @Get(':id')
  @Response('FETCHED', ['Service'])
  async show(id: number) {
    return this.service.findById(id);
  }
}
