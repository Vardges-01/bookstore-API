import { MigrationInterface, QueryRunner } from "typeorm";

export class auto1677433414092 implements MigrationInterface {
    name = 'auto1677433414092'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "author" character varying NOT NULL, "isbn" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "UQ_71e83ac5f0a03ed159b7dd3fbad" UNIQUE ("isbn"), CONSTRAINT "PK_3ea5638ccafa8799838e68fad46" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "book_entity"`);
    }

}
