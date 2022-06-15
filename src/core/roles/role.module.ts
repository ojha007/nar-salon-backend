import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RoleController from './role.controller';
import RoleEntity from './role.entity';
import { RolesService } from './role.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  controllers: [RoleController],
  providers: [RolesService],
})
export default class RoleModule {}
