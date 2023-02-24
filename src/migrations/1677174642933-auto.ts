import { MigrationInterface, QueryRunner } from "typeorm";

export class auto1677174642933 implements MigrationInterface {
    name = 'auto1677174642933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "author" character varying NOT NULL, "isbn" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "UQ_54337dc30d9bb2c3fadebc69094" UNIQUE ("isbn"), CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f3f2f25a099d24e12545b70b02" ON "books" ("id") `);
        await queryRunner.query(`CREATE INDEX "IDX_4675aad2c57a7a793d26afbae9" ON "books" ("author") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_4675aad2c57a7a793d26afbae9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f3f2f25a099d24e12545b70b02"`);
        await queryRunner.query(`DROP TABLE "books"`);
    }

}
