import { BaseEntity } from 'typeorm';
export default class AppointmentStatusEntity extends BaseEntity {
    static readonly BOOKED = "BOOKED";
    static readonly PENDING = "PENDING";
    id: number;
    name: string;
    isDefault: boolean;
}
