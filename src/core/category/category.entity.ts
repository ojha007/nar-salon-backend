import { CategoryType } from '../../constants/CategoryType.enum';
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity(CategoryEntity.MODEL_NAME)
export default class CategoryEntity extends BaseEntity {
  static MODEL_NAME = 'categories';

  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({
    name: 'name',
    nullable: false,
    type: 'varchar',
    length: 25,
  })
  name: string;

  @ManyToOne(() => CategoryEntity, (category) => category.children)
  @JoinColumn({ name: 'parent_id' })
  parent: CategoryEntity;

  @OneToMany(() => CategoryEntity, (category) => category.parent)
  children: CategoryEntity[];

  @Column({ name: 'is_active', default: true, type: 'boolean' })
  isActive: boolean;
}
