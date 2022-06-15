import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateUserAndRoleTable1655289847149 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
