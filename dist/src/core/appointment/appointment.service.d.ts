import { AppointmentQueryInterface } from 'src/interfaces/RequestQuery.interface';
import { Repository } from 'typeorm';
import AppointmentEntity from './appointment.entity';
import { AppointmentDto } from './dto/Appointment.dto';
import AppointmentStatusService from './status.service';
export default class AppointmentService {
    private repository;
    private statusService;
    constructor(repository: Repository<AppointmentEntity>, statusService: AppointmentStatusService);
    create(payload: AppointmentDto): Promise<boolean>;
    private isSlotBooked;
    findAll(params: AppointmentQueryInterface): Promise<any>;
}
