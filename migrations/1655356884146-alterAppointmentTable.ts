import {MigrationInterface, QueryRunner} from "typeorm";

export class alterAppointmentTable1655356884146 implements MigrationInterface {
    name = 'alterAppointmentTable1655356884146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments" ADD "customer_name" character varying`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD "phone" character varying(10)`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD "service_id" integer`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_2a2088e8eaa8f28d8de2bdbb857" FOREIGN KEY ("service_id") REFERENCES "salon_services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_2a2088e8eaa8f28d8de2bdbb857"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "service_id"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "customer_name"`);
    }

}
