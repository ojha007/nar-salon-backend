import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from '@hapi/joi';
import { Injectable } from '@nestjs/common';
import IEnvConfigInterface from '../interfaces/IEnvConfigInterface';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

@Injectable()
class ConfigService {
  private readonly envConfig: IEnvConfigInterface;

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  public getTypeORMConfig(): TypeOrmModuleOptions {
    const baseDir = path.join(__dirname, '../');
    const entitiesPath = `${baseDir}${this.envConfig.ENTITIES_PATH}`;
    const migrationPath = `${baseDir}${this.envConfig.MIGRATION_PATH}`;
    const type: any = this.envConfig.ORM_CONNECTION;
    return {
      type,
      host: this.envConfig.DB_HOST,
      username: this.envConfig.DB_USER,
      password: this.envConfig.DB_PASSWORD,
      database: this.envConfig.DB_NAME,
      port: Number.parseInt(this.envConfig.DB_PORT, 5239),
      logging: false,
      entities: [entitiesPath],
      migrations: [migrationPath],
      cli: {
        migrationsDir: 'src/migrations',
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
}

export default ConfigService;
