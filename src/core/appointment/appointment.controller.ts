import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Role } from 'src/constants/roles';
import { Response } from 'src/decorators/response';
import { AppointmentQueryInterface } from 'src/interfaces/RequestQuery.interface';
import { NoAuth } from 'src/meta/isPublic.meta';
import RoleGuard from '../auth/guard/role.guard';
import AppointmentService from './appointment.service';
import { AppointmentDto } from './dto/Appointment.dto';

@Controller(['internal/appointments', 'appointments'])
export default class AppointmentController {
  constructor(private readonly service: AppointmentService) {}

  @Post()
  @NoAuth()
  @Response('RECIEVED', ['Appointment'])
  async create(@Body() payload: AppointmentDto) {
    return this.service.create(payload);
  }

  @Get()
  @UseGuards(RoleGuard(Role.Admin))
  @Response('FETCHED', ['Appointment'])
  async index(@Query() params: AppointmentQueryInterface) {
    params.limit = params.limit || 10;
    params.offset = params.offset || 0;
    return await this.service.findAll(params);
  }

  @Put(':id')
  @Response('RECIEVED', ['Appointment'])
  async update() {}
}
