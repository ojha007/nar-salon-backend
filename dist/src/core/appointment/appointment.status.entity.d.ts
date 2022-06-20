import { BaseEntity } from 'typeorm';
export default class AppointmentStatusEntity extends BaseEntity {
    id: number;
    name: string;
    isDefault: boolean;
}
