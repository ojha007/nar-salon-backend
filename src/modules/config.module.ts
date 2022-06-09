import { Global, Module } from '@nestjs/common';
import ConfigService from './config.service';

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`.env.${process.env.NODE_ENV || 'local'}`),
    },
  ],
  exports: [ConfigService],
})
export default class ConfigModule {}
