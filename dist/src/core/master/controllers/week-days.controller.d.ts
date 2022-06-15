import WeekDaysService from '../services/week-days.service';
export default class WeekDaysController {
    private readonly service;
    constructor(service: WeekDaysService);
    index(): Promise<import("../entities/week-days.entity").default[]>;
}
