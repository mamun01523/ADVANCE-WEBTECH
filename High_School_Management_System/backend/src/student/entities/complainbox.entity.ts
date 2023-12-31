import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StudentEntity } from "./student.entity";


@Entity("Complainbox")
export class ComplainBoxEntity{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    massage: string;

    @Column()
    senddate: Date;
    
    @ManyToOne(() => StudentEntity, (Student) => Student.complainbox)
    Student: StudentEntity;
}