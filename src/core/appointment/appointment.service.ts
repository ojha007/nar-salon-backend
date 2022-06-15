import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import AppointmentEntity from './appointment.entity';

@Injectable()
export default class AppointmentService {
  constructor(
    @InjectRepository(AppointmentEntity)
    private repository: Repository<AppointmentEntity>,
  ) {}
}
