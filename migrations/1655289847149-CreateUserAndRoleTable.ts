import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserAndRoleTable1655289847149 implements MigrationInterface {
  name = 'CreateUserAndRoleTable1655289847149';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."master_working_hours_day_id_uindex"`,
    );
    await queryRunner.query(
      `CREATE TABLE "appointments" ("id" SERIAL NOT NULL, "date" date NOT NULL, "slot_from" TIME NOT NULL, "slot_to" TIME NOT NULL, CONSTRAINT "PK_4a437a9a27e948726b8bb3e36ad" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying(10) NOT NULL, CONSTRAINT "UQ_648e3f5447f725579d7d4ffdfb7" UNIQUE ("name"), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying(255) NOT NULL, "password" text NOT NULL, "email_verified_at" date, "phone_number" character varying(11) NOT NULL, "avatar" text, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_bfdeaaf4e85600d82a5b8458c2" ON "master_working_hours" ("day_id") `,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_bfdeaaf4e85600d82a5b8458c2" ON "master_working_hours" ("day_id") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_bfdeaaf4e85600d82a5b8458c2"`,
    );
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "roles"`);
    await queryRunner.query(`DROP TABLE "appointments"`);
    await queryRunner.query(
      `CREATE UNIQUE INDEX "master_working_hours_day_id_uindex" ON "master_working_hours" ("day_id") `,
    );
  }
}
