import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'appointment_statuses' })
export default class AppointmentStatusEntity extends BaseEntity {
  static readonly BOOKED = 'BOOKED';
  static readonly PENDING = 'PENDING';
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'name',
    nullable: false,
    unique: true,
    type: 'varchar',
    length: 20,
  })
  name: string;

  @Column({ name: 'is_default', type: 'boolean', default: false })
  isDefault: boolean;
}
