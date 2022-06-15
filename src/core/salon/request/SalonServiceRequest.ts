import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IsExists } from 'src/decorators/isExists';

export class SalonServiceRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  @IsExists({
    table: 'salon_services',
    column: 'id',
    options: {
      column: 'is_active',
      value: true,
    },
  })
  parentId: number;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
