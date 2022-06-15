import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateWeekDayMasterTable1655272889694 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
