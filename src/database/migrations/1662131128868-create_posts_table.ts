import { MigrationInterface, QueryRunner } from 'typeorm';

export class createPostsTable1662131128868 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        -- Table Definition
        CREATE TABLE "posts"(
            "id" BIGSERIAL PRIMARY KEY,
            "title" varchar NOT NULL,
            "description" text NOT NULL,
            "active" BOOL NOT NULL DEFAULT TRUE,
            "imageUrl" varchar,
            "createdAt" timestamptz NOT NULL DEFAULT now(),
            "updatedAt" timestamptz NOT NULL DEFAULT now()
        );
       `,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "posts";', undefined);
  }
}
