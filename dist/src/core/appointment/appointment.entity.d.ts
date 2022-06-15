import UserEntity from '../user/user.entity';
import AppointmentStatusEntity from './appointment.status.entity';
export default class AppointmentEntity {
    id: number;
    date: Date;
    slotFrom: string;
    slotTo: string;
    user: UserEntity;
    status: AppointmentStatusEntity;
    createdBy: UserEntity;
    updatedBy: UserEntity;
    createdAt: string;
    updatedAt: string;
}
