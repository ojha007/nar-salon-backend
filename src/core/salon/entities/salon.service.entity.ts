import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'salon_services' })
export default class SalonServiceEntitiy extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'integer' })
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 25 })
  name: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => SalonServiceEntitiy, (service) => service.children)
  @JoinColumn({ name: 'parent_id', referencedColumnName: 'id' })
  parent: SalonServiceEntitiy;

  @OneToMany(() => SalonServiceEntitiy, (service) => service.parent)
  children: SalonServiceEntitiy[];

  @Column({
    name: 'is_active',
    type: 'boolean',
    default: true,
    nullable: false,
  })
  isActive: boolean;

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
  updateAt: string;
}
