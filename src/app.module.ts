import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ConfigModule from './modules/config.module';
import { importModule } from './utils/fileToClass';

@Module({
  imports: [ConfigModule, ...importModule()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
