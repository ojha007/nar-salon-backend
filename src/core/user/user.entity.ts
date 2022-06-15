import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export default class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'full_name', nullable: false, type: 'varchar' })
  fullName: string;

  @Column({
    name: 'email',
    unique: true,
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  email: string;

  @Column({ name: 'password', nullable: false, type: 'text' })
  password: string;

  @Column({
    name: 'email_verified_at',
    nullable: true,
    type: 'timestamp',
  })
  emailVerifiedAt: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 11 })
  phoneNumber: string;

  @Column({ name: 'avatar', type: 'text', nullable: true })
  avatar: string;

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
