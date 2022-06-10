import { TypeOrmModuleOptions } from '@nestjs/typeorm';
declare class ConfigService {
    private readonly envConfig;
    constructor(filePath: string);
    getTypeORMConfig(): TypeOrmModuleOptions;
    private validateInput;
    getTypeORMRoot(): TypeOrmModuleOptions;
}
export default ConfigService;
