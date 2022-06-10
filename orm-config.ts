import { join } from 'path/posix';
import ConfigService from './src/modules/config.service';

let path = join(__dirname, '.env.local');
const configService: ConfigService = new ConfigService(path);
let dbConfiguration = configService.getTypeORMConfig();
export default dbConfiguration;
