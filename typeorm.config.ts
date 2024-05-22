import * as dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'CRUD',
  synchronize: false,
  dropSchema: false,
  logging: false,
  migrationsTransactionMode: 'each',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: ['./migrations/**/*.ts'],
  migrationsTableName: 'migrations',
});
