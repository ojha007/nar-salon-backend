import {MigrationInterface, QueryRunner} from "typeorm";

export class alterAppointmentStatusTable1655358528786 implements MigrationInterface {
    name = 'alterAppointmentStatusTable1655358528786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_statuses" ADD "is_default" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_statuses" DROP COLUMN "is_default"`);
    }

}
