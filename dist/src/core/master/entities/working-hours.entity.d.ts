import MasterWeekDayEntities from './week-days.entity';
export default class WorkingHoursEntity {
    id: number;
    startHour: string;
    endHour: string;
    weekDay: MasterWeekDayEntities;
}
