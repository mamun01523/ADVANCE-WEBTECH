import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [StudentModule, TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'SchoolManagementDB',
    autoLoadEntities: true,
    synchronize: true,
    } ),
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
