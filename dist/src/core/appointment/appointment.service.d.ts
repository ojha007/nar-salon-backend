import { Repository } from 'typeorm';
import AppointmentEntity from './appointment.entity';
export default class AppointmentService {
    private repository;
    constructor(repository: Repository<AppointmentEntity>);
}
