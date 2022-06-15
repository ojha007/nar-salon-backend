import { Controller, Post } from '@nestjs/common';
import { Response } from 'src/decorators/response';
import AppointmentService from './appointment.service';

@Controller(['internal/appointments', '/appointments'])
export default class AppointmentController {
  constructor(private readonly service: AppointmentService) {}

  @Post()
  @Response('RECIEVED', ['Appointment'])
  async create() {
    return;
  }
}
