import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import SalonServiceEntitiy from '../salon/entities/salon.service.entity';
import UserEntity from '../user/user.entity';
import AppointmentStatusEntity from './appointment.status.entity';

@Entity({ name: 'appointments' })
export default class AppointmentEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'date', type: 'date', nullable: false })
  date: Date;

  @Column({ name: 'slot_from', type: 'time', nullable: false })
  slotFrom: string;

  @Column({ name: 'slot_to', type: 'time', nullable: false })
  slotTo: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => AppointmentStatusEntity)
  @JoinColumn({ name: 'status_id' })
  status: AppointmentStatusEntity;

  @Column({ name: 'customer_name', type: 'varchar', nullable: true })
  customerName: string;

  @Column({ name: 'phone', type: 'varchar', length: 10, nullable: true })
  phone: string;

  @ManyToOne(() => SalonServiceEntitiy)
  @JoinColumn({ name: 'service_id' })
  service: SalonServiceEntitiy;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'updated_by' })
  updatedBy: UserEntity;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    select: false,
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    select: false,
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: string;
}
