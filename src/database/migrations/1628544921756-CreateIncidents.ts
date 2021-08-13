import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIncidents1628544921756 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'incidents',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          // {
          //   name: 'id',
          //   type: 'uuid',
          //   isPrimary: true,
          // },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'value',
            type: 'decimal',
          },
          {
            name: 'ong_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKOngIncidents',
            referencedTableName: 'ongs',
            referencedColumnNames: ['id'],
            columnNames: ['ong_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ongs');
  }
}
