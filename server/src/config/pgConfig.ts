import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  type: 'postgres',

  // url: 'postgresql://neondb_owner:A8TEdDWzvB6b@ep-steep-star-a8mx1f7u.eastus2.azure.neon.tech/neondb?sslmode=require',
  port: 3306,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // only "true" develop mod
};
