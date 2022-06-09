import { CategoryType } from '../../constants/CategoryType.enum';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export default class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  @Column({ name: 'name', nullable: false, type: 'varchar', length: 25 })
  name: string;

  @Column({ name: 'parent_id', nullable: true, type: 'bigint' })
  parentId: number;

  @Column({ name: 'type', enum: CategoryType, nullable: false })
  type: CategoryType;

  @Column({ name: 'is_active', default: true, type: 'boolean' })
  isActive: boolean;
}
