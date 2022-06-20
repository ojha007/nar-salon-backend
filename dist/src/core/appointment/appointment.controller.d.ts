import { AppointmentQueryInterface } from 'src/interfaces/RequestQuery.interface';
import AppointmentService from './appointment.service';
import { AppointmentDto } from './dto/Appointment.dto';
export default class AppointmentController {
    private readonly service;
    constructor(service: AppointmentService);
    create(payload: AppointmentDto): Promise<boolean>;
    index(params: AppointmentQueryInterface): Promise<any>;
    update(): Promise<void>;
}
