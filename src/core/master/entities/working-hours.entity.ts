import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import MasterWeekDayEntities from './week-days.entity';

@Entity({ name: 'master_working_hours' })
export default class WorkingHoursEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'integer' })
  id: number;

  @Column({ name: 'start_hour', type: 'time', nullable: true })
  startHour: string;

  @Column({ name: 'end_hour', type: 'time', nullable: true })
  endHour: string;

  @OneToOne(() => MasterWeekDayEntities, (day) => day.id)
  @JoinColumn({ name: 'day_id' })
  @Index({ unique: true })
  weekDay: MasterWeekDayEntities;
}
