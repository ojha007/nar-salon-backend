import { BaseEntity } from 'typeorm';
import SalonServiceEntitiy from '../salon/entities/salon.service.entity';
import UserEntity from '../user/user.entity';
import AppointmentStatusEntity from './appointment.status.entity';
export default class AppointmentEntity extends BaseEntity {
    id: number;
    date: Date;
    slotFrom: string;
    slotTo: string;
    user: UserEntity;
    status: AppointmentStatusEntity;
    customerName: string;
    phone: string;
    service: SalonServiceEntitiy;
    createdBy: UserEntity;
    updatedBy: UserEntity;
    createdAt: string;
    updatedAt: string;
}
