import { Repository } from 'typeorm';
import WorkingHoursEntity from '../entities/working-hours.entity';
import { WorkingHoursRequest } from '../request/WorkingHoursRequest';
export default class WorkingHoursService {
    private repository;
    constructor(repository: Repository<WorkingHoursEntity>);
    findAll(): Promise<WorkingHoursEntity[]>;
    create(payload: WorkingHoursRequest): Promise<any[]>;
}
