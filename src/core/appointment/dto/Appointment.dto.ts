import {
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import SalonServiceEntitiy from 'src/core/salon/entities/salon.service.entity';
import { IsExists } from 'src/decorators/isExists';
import AppointmentStatusEntity from '../appointment.status.entity';

export class AppointmentDto {
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsMilitaryTime()
  slotFrom: string;

  @IsNotEmpty()
  @IsMilitaryTime()
  slotTo: string;

  @IsNotEmpty()
  @IsString()
  customerName: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(10, 10)
  phone: string;

  @IsNotEmpty()
  @IsNumber()
  @IsExists({
    table: 'salon_services',
    column: 'id',
    options: {
      column: 'parent_id',
      value: 'not null',
    },
  })
  service: SalonServiceEntitiy;

  @IsOptional()
  userId?: number;

  @IsOptional()
  status?: AppointmentStatusEntity;
}

export class SlotRequestInterface {
  service: SalonServiceEntitiy;
  date: string;
  slotFrom: string;
  slotTo: string;
}
