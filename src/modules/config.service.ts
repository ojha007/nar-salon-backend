import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from '@hapi/joi';
import { Injectable } from '@nestjs/common';
import IEnvConfigInterface from '../interfaces/IEnvConfigInterface';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import { readAllEntities } from '../utils/fileToClass';

@Injectable()
class ConfigService {
  private readonly envConfig: IEnvConfigInterface;

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  public getTypeORMConfig(): TypeOrmModuleOptions {
    const baseDir = path.join(__dirname, '../../dist');
    const entitiesPath: string = `${baseDir}/src`;
    const migrationPath: string = `${baseDir}/migrations/*.js`;
    let rootConfig = this.getTypeORMRoot();
    return {
      ...rootConfig,
      entities: readAllEntities(entitiesPath),
      migrations: [migrationPath],
      cli: {
        migrationsDir: 'migrations',
        entitiesDir: 'src/core/entities',
      },
    };
  }

  /*
	  Ensures all needed variables are set, and returns the validated JavaScript object
	  including the applied default values.
  */
  private validateInput(envConfig: IEnvConfigInterface): IEnvConfigInterface {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string().valid('dev', 'local').default('local'),
      HTTP_PORT: Joi.number().required(),
    }).unknown(true);
    const { error, value: validatedEnvConfig } =
      envVarsSchema.validate(envConfig);
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  public getTypeORMRoot(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.envConfig.DB_HOST,
      username: this.envConfig.DB_USER,
      password: this.envConfig.DB_PASSWORD,
      database: this.envConfig.DB_NAME,
      port: parseInt(this.envConfig.DB_PORT),
      logging: false,
      entities: [],
      migrations: [],
    };
  }
}

export default ConfigService;
