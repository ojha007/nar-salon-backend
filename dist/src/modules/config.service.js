"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const fs = require("fs");
const Joi = require("@hapi/joi");
const common_1 = require("@nestjs/common");
const path = require("path");
let ConfigService = class ConfigService {
    constructor(filePath) {
        const config = dotenv.parse(fs.readFileSync(filePath));
        this.envConfig = this.validateInput(config);
    }
    getTypeORMConfig() {
        const baseDir = path.join(__dirname, '../');
        const entitiesPath = `${baseDir}${this.envConfig.ENTITIES_PATH}`;
        const migrationPath = `${baseDir}${this.envConfig.MIGRATION_PATH}`;
        const type = this.envConfig.ORM_CONNECTION;
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
    validateInput(envConfig) {
        const envVarsSchema = Joi.object({
            NODE_ENV: Joi.string().valid('dev', 'local').default('local'),
            HTTP_PORT: Joi.number().required(),
        }).unknown(true);
        const { error, value: validatedEnvConfig } = envVarsSchema.validate(envConfig);
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }
};
ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String])
], ConfigService);
exports.default = ConfigService;
//# sourceMappingURL=config.service.js.map