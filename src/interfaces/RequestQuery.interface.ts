import { IsOptional } from 'class-validator';

export class PaginationInterface {
  @IsOptional()
  limit: number;
  @IsOptional()
  offset: number;
}

export class AppointmentQueryInterface extends PaginationInterface {
  @IsOptional()
  statusId: number;
  @IsOptional()
  serviceId: number;
  @IsOptional()
  date: string;
}
