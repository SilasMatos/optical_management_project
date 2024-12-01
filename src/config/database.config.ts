// src/config/database.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost', // Substitua pelo seu host do banco de dados
  port: 3306, // Porta padrão do MySQL
  username: 'root', // Substitua pelo seu usuário do banco de dados
  password: '', // Substitua pela sua senha do banco de dados
  database: 'optical_management', // Nome do banco de dados
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: true, // Use apenas em desenvolvimento
};
