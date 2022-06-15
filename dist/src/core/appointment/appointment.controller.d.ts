import AppointmentService from './appointment.service';
export default class AppointmentController {
    private readonly service;
    constructor(service: AppointmentService);
    create(): Promise<void>;
    update(): Promise<void>;
}
