import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateWeekDayMasterTable1655272889694
  implements MigrationInterface
{
  name = 'CreateWeekDayMasterTable1655272889694';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "master_week_days" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_787b074ace182ed837abf74eebf" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "master_working_hours" ("id" SERIAL NOT NULL, "start_hour" TIME WITH TIME ZONE, "end_hour" TIME WITH TIME ZONE, "day_id" integer, CONSTRAINT "REL_bfdeaaf4e85600d82a5b8458c2" UNIQUE ("day_id"), CONSTRAINT "PK_380162c166d5a28b2639644aec9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "master_working_hours" ADD CONSTRAINT "FK_bfdeaaf4e85600d82a5b8458c2c" FOREIGN KEY ("day_id") REFERENCES "master_week_days"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`INSERT INTO master_week_days(id,name) 
        VALUES
         (1,'Sunday'),
         (2,'Monday'),
         (3,'Tuesday'),
         (4,'Wednesday'),
         (5,'Thursday'),
         (6,'Friday'),
         (7,'Saturday') on conflict do nothing;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "master_working_hours" DROP CONSTRAINT "FK_bfdeaaf4e85600d82a5b8458c2c"`,
    );
    await queryRunner.query(`DROP TABLE "master_working_hours"`);
    await queryRunner.query(`DROP TABLE "master_week_days"`);
  }
}
