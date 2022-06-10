import { MigrationInterface, QueryRunner } from 'typeorm';

export class createCategoryTable1654834633078 implements MigrationInterface {
  name = 'createCategoryTable1654834633078';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "categories"
         (
            "id" SERIAL NOT NULL, 
            "name" character varying(25) NOT NULL,
            "is_active" boolean NOT NULL DEFAULT true, 
            "parent_id" integer, 
            CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")
        )`);
    await queryRunner.query(
      `ALTER TABLE "categories" ADD CONSTRAINT "FK_88cea2dc9c31951d06437879b40" FOREIGN KEY ("parent_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "categories" DROP CONSTRAINT "FK_88cea2dc9c31951d06437879b40"`,
    );
    await queryRunner.query(`DROP TABLE "categories"`);
  }
}
