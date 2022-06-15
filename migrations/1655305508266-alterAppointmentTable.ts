import {MigrationInterface, QueryRunner} from "typeorm";

export class alterAppointmentTable1655305508266 implements MigrationInterface {
    name = 'alterAppointmentTable1655305508266'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "appointment_statuses" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, CONSTRAINT "UQ_dc14712927b80d8e607315e25bb" UNIQUE ("name"), CONSTRAINT "PK_512f1ee9e163ca4f521c9c03d69" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD "status_id" integer`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD "created_by" integer`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD "updated_by" integer`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_66dee3bea82328659a4db8e54b7" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_2b35dd864ffc9740d944427f790" FOREIGN KEY ("status_id") REFERENCES "appointment_statuses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_d7ca5e722b384f282042d92f4c1" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_513848484c6f8b4144dda24aa2d" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_513848484c6f8b4144dda24aa2d"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_d7ca5e722b384f282042d92f4c1"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_2b35dd864ffc9740d944427f790"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_66dee3bea82328659a4db8e54b7"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "updated_by"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "created_by"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "status_id"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "created_at"`);
        await queryRunner.query(`DROP TABLE "appointment_statuses"`);
    }

}
