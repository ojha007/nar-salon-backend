import { MigrationInterface, QueryRunner } from "typeorm";
export declare class alterAppointmentStatusTable1655358528786 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
