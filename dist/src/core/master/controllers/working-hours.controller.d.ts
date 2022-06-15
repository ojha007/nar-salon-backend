import { WorkingHoursRequest } from '../request/WorkingHoursRequest';
import WorkingHoursService from '../services/working-hours.service';
export default class WorkingHoursController {
    private readonly service;
    constructor(service: WorkingHoursService);
    index(): Promise<import("../entities/working-hours.entity").default[]>;
    create(payload: WorkingHoursRequest): Promise<any[]>;
}
