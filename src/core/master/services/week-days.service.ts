import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import MasterWeekDayEntities from '../entities/week-days.entity';

@Injectable()
export default class WeekDaysService {
  constructor(
    @InjectRepository(MasterWeekDayEntities)
    private repository: Repository<MasterWeekDayEntities>,
  ) {}

  async findAll() {
    return await this.repository.find();
  }
}
