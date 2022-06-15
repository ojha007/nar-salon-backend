import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import WorkingHoursEntity from '../entities/working-hours.entity';
import { WorkingHoursRequest } from '../request/WorkingHoursRequest';

@Injectable()
export default class WorkingHoursService {
  constructor(
    @InjectRepository(WorkingHoursEntity)
    private repository: Repository<WorkingHoursEntity>,
  ) {}

  async findAll() {
    return this.repository.find({ relations: ['weekDay'], cache: true });
  }

  async create(payload: WorkingHoursRequest) {
    await this.repository.save(payload);
    return [];
  }
}
