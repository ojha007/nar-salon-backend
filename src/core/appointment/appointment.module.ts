import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppointmentController from './appointment.controller';
import AppointmentEntity from './appointment.entity';
import AppointmentService from './appointment.service';
import AppointmentStatusEntity from './appointment.status.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AppointmentEntity, AppointmentStatusEntity]),
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService],
  exports: [],
})
export default class AppointmentModule {}
