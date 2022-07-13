import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Task } from './tasks/tasks.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValicationSchema } from './config.schema';
import { SequelizeModule } from '@nestjs/sequelize';
import { Config } from 'prettier';
import { MenteesModule } from './mentees/mentees.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      validationSchema: configValicationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        synchronize: true,
        autoLoadEntities: true,
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USERNAME'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
      }),
    }),
    SequelizeModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USERNAME'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        models: [],
      }),
    }),
    TasksModule,
    AuthModule,
    MenteesModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
