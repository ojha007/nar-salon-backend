import { Controller, Post, Put } from '@nestjs/common';
import { Response } from 'src/decorators/response';
import { NoAuth } from 'src/meta/isPublic.meta';
import AppointmentService from './appointment.service';

@Controller(['internal/appointments', 'appointments'])
export default class AppointmentController {
  constructor(private readonly service: AppointmentService) {}

  @Post()
  @NoAuth()
  @Response('RECIEVED', ['Appointment'])
  async create() {
    // return this.service.();
    return;
  }

  @Put(':id')
  @Response('RECIEVED', ['Appointment'])
  async update() {}
}
