"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posix_1 = require("path/posix");
const config_service_1 = require("./src/modules/config.service");
let path = (0, posix_1.join)(__dirname, '.env.local');
const configService = new config_service_1.default(path);
let dbConfiguration = configService.getTypeORMConfig();
exports.default = dbConfiguration;
//# sourceMappingURL=orm-config.js.map