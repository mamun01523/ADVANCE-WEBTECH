import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TeacherEntity } from "./teacher.entity";
import { StudentEntity } from "./student.entity";


@Entity("TeacherStudent")
export class TeacherStudentEntity{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    massage: string;

    @Column()
    senddate: Date;

   @ManyToOne(() => TeacherEntity, teacher => teacher.teacherStudents)
  teacher: TeacherEntity;

  @ManyToOne(() => StudentEntity, student => student.teacherStudents)
  student: StudentEntity;
}