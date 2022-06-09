import * as dotenv from 'dotenv';
import { dotEnvOptions } from '../../src/config/dotenv';

// Make sure dbConfig is imported only after dotenv.config

dotenv.config(dotEnvOptions);
import * as dbConfig from '../../src/config/dbconfig';

module.exports = dbConfig.default;
