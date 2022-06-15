import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'master_week_days' })
export default class MasterWeekDayEntities {
  @PrimaryGeneratedColumn({ name: 'id', type: 'integer' })
  id: number;

  @Column({ name: 'name', type: 'varchar', nullable: false })
  name: string;
}
