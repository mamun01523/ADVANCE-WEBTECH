import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StudentEntity } from "./student.entity";
import { classRoutineEntity } from "./classRoutine.entity";
import { examEntity } from "./exam.entity";
import { examRoutineEntity } from "./examRoutine.entity";
import { SubjectTeacherEntity } from "./subjectTeacher.entity";
import { NoteEntity } from "./note.entity";

@Entity("class")
export class classEntity{
    @PrimaryGeneratedColumn()
    ID: number

    @Column()
    ClassName: string;

    @OneToMany(() => StudentEntity, (student) => student.Class, {cascade:true})
    Students: StudentEntity[];

    @OneToMany(() => classRoutineEntity, (classroutine) => classroutine.Class)
    ClassRoutine: classRoutineEntity[];

    @OneToMany(() => examEntity, (exam) => exam.Class)
    Exams: examEntity[];

    @OneToMany(() => examRoutineEntity, (examRoutine) => examRoutine.Class)
    ExamRoutines: examRoutineEntity[];

    @OneToMany(() => SubjectTeacherEntity, (subjectTeacher) => subjectTeacher.Class)
    STeachers: SubjectTeacherEntity[];

    @OneToMany(() => NoteEntity, (note) => note.Class)
    notes: NoteEntity[];
}