"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const dotenv_1 = require("../../src/config/dotenv");
dotenv.config(dotenv_1.dotEnvOptions);
const dbConfig = require("../../src/config/dbconfig");
module.exports = dbConfig.default;
//# sourceMappingURL=loader.js.map