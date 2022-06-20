import { Repository } from 'typeorm';
import AppointmentStatusEntity from './appointment.status.entity';
export default class AppointmentStatusService {
    private repository;
    constructor(repository: Repository<AppointmentStatusEntity>);
    defaultStatus(): Promise<AppointmentStatusEntity>;
}
