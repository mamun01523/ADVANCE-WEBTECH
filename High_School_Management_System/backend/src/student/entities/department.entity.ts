import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TeacherEntity } from './teacher.entity';

@Entity("Department")
export class DepartmentEntity {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  DeptName: string;

  @OneToMany(() => TeacherEntity, (teacher) => teacher.TeacherDepartment)
  Teachers: TeacherEntity[];
}