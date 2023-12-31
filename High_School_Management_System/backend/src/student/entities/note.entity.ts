import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { classEntity } from "./class.entity";
import { sectionEntity } from "./section.entity";
import { TeacherEntity } from "./teacher.entity";


@Entity("Note")
export class NoteEntity {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  NoteTitle: string;

  @Column()
  NoteText: string;

  @Column()
  File: string;

  @Column({ type: 'date' })
  Date: Date;



    @ManyToOne(() => classEntity, (classEntity) => classEntity.notes)
    Class: classEntity;

    @ManyToOne(() => sectionEntity, (section) => section.notes)
    Section: sectionEntity;

    @ManyToOne(() => TeacherEntity, (teacher) => teacher.notes)
    Teacher: TeacherEntity;
}