import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSalonServiceTable1655268632512
  implements MigrationInterface
{
  name = 'CreateSalonServiceTable1655268632512';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "salon_services" (
            "id" SERIAL NOT NULL,
             "name" character varying(25) NOT NULL,
              "description" text, 
              "is_active" boolean NOT NULL DEFAULT true, 
              "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, 
              "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, 
              "parent_id" integer,

               CONSTRAINT "PK_3b5fc6c40f202bbc32640e37e6e" PRIMARY KEY ("id"))`);
    await queryRunner.query(
      `ALTER TABLE "salon_services" ADD CONSTRAINT "FK_959dd0a31315fa8b21e2a77f444" FOREIGN KEY ("parent_id") REFERENCES "salon_services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "salon_services" DROP CONSTRAINT "FK_959dd0a31315fa8b21e2a77f444"`,
    );
    await queryRunner.query(`DROP TABLE "salon_services"`);
  }
}
