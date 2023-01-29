import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from './entity/Product';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5455,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Product],
  migrations: ['src/migration/**/*.ts'],
  subscribers: [],
});
