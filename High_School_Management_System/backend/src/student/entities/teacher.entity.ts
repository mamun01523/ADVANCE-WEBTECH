import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { DepartmentEntity } from './department.entity';
import { SubjectTeacherEntity } from './subjectTeacher.entity';
import { TeacherStudentEntity } from './teacherStudent.entity';
import { NoteEntity } from './note.entity';

@Entity("Teacher")
export class TeacherEntity {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Email: string;

  @Column()
  ContactNumber: number;

  @Column({ type: 'date' })
  DateOfBirth: Date;

  @Column()
  Gender: string;

  @Column()
  Education: string;

  @Column()
  Password: string;

  @Column()
  ProfilePicture: string;
  
  @ManyToOne(() => DepartmentEntity, (teacherDepartment) => teacherDepartment.Teachers)
  TeacherDepartment: DepartmentEntity;

  @OneToMany(() => SubjectTeacherEntity, (subjectTeacher) => subjectTeacher.Teacher)
  STeachers: SubjectTeacherEntity[];

  @OneToMany(() => TeacherStudentEntity, teacherStudent => teacherStudent.teacher)
  teacherStudents: TeacherStudentEntity[];

  @OneToMany(() => NoteEntity, (note) => note.Teacher)
  notes: NoteEntity[];
}