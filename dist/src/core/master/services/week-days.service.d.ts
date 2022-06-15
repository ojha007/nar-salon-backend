import { Repository } from 'typeorm';
import MasterWeekDayEntities from '../entities/week-days.entity';
export default class WeekDaysService {
    private repository;
    constructor(repository: Repository<MasterWeekDayEntities>);
    findAll(): Promise<MasterWeekDayEntities[]>;
}
