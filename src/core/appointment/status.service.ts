import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import AppointmentStatusEntity from './appointment.status.entity';

export default class AppointmentStatusService {
  constructor(
    @InjectRepository(AppointmentStatusEntity)
    private repository: Repository<AppointmentStatusEntity>,
  ) {}

  async defaultStatus(): Promise<AppointmentStatusEntity> {
    return this.repository.findOne({ where: { isDefault: true } });
  }
  async find(where = {}): Promise<AppointmentStatusEntity> {
    return this.repository.findOne({ where });
  }
}
