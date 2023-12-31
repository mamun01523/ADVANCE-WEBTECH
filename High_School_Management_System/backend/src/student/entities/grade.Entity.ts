import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { resultEntity } from "./result.entity";

@Entity("Grade")
export class gradeEntity{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    GradeName: string;
    
    @OneToMany(() => resultEntity, (result) => result.Grade)
    Results: resultEntity[];

}