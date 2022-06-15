import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'appointments' })
export default class AppointmentEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'date', type: 'date', nullable: false })
  date: Date;

  @Column({ name: 'slot_from', type: 'time', nullable: false })
  slotFrom: string;

  @Column({ name: 'slot_to', type: 'time', nullable: false })
  slotTo: string;
}
