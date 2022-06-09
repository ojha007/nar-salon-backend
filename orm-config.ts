import { join } from 'path/posix';
import ConfigService from './src/modules/config.service';

let path = join(__dirname, '../');
const configService: ConfigService = new ConfigService(path);

let dbConfiguration = {
  subscribers: [__dirname + '/src/subscriber/*.{ts,js}'],
  migrations: [__dirname + '/src/migrations/*.{ts,js}'],
  cli: {
    entitiesDir: 'src/core',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscriber',
  },
};
export default dbConfiguration;
