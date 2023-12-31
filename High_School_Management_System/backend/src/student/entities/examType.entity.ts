import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { examEntity } from "./exam.entity";

@Entity("ExamType")
export class examtypeEntity{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    ExamTypeName: string;
    
    @OneToMany(() => examEntity, (exam) => exam.ExamType)
    Exams: examEntity[]

}