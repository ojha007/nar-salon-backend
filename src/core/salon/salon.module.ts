import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import SalonServiceController from './controllers/salon.service.controller';
import SalonServiceEntitiy from './entities/salon.service.entity';
import SalonService from './services/salon.service';

@Module({
  imports: [TypeOrmModule.forFeature([SalonServiceEntitiy])],
  controllers: [SalonServiceController],
  providers: [SalonService],
})
export default class SalonModule {}
