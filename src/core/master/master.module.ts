import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import WeekDaysController from './controllers/week-days.controller';
import WorkingHoursController from './controllers/working-hours.controller';
import MasterWeekDay from './entities/week-days.entity';
import WorkingHoursEntity from './entities/working-hours.entity';
import WeekDaysService from './services/week-days.service';

import WorkingHoursService from './services/working-hours.service';

@Module({
  imports: [TypeOrmModule.forFeature([MasterWeekDay, WorkingHoursEntity])],
  controllers: [WorkingHoursController, WeekDaysController],
  providers: [WorkingHoursService, WeekDaysService],
})
export default class MasterModule {}
