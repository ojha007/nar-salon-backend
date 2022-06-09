"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posix_1 = require("path/posix");
const config_service_1 = require("./src/modules/config.service");
let path = (0, posix_1.join)(__dirname, '../');
const configService = new config_service_1.default(path);
let dbConfiguration = {
    subscribers: [__dirname + '/src/subscriber/*.{ts,js}'],
    migrations: [__dirname + '/src/migrations/*.{ts,js}'],
    cli: {
        entitiesDir: 'src/core',
        migrationsDir: 'src/migrations',
        subscribersDir: 'src/subscriber',
    },
};
exports.default = dbConfiguration;
//# sourceMappingURL=orm-config.js.map