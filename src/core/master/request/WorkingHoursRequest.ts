import {
  IsMilitaryTime,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { IsExists } from 'src/decorators/isExists';
import MasterWeekDayEntities from '../entities/week-days.entity';

export class WorkingHoursRequest {
  @IsMilitaryTime()
  startHour: string;

  @IsNotEmpty()
  @IsString()
  endHour: string;

  @IsNotEmpty()
  @IsNumber()
  @IsExists({
    table: 'master_week_days',
    column: 'id',
  })
  weekDay: MasterWeekDayEntities;
}
