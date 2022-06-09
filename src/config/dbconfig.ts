import * as path from 'path';
const baseDir = path.join(__dirname, '../');
const entitiesPath = `${baseDir}${process.env.ENTITIES_PATH}`;
const migrationPath = `${baseDir}${process.env.MIGRATION_PATH}`;

export default {
  type: 'postgres',
  host: process.env.HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number.parseInt(process.env.port, 10),
  entities: [entitiesPath],
  migrations: [migrationPath],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/entities',
  },
};
