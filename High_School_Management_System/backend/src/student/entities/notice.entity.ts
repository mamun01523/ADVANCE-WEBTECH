import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Notice")
export class NoticeEntity {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  NoticeTitle: string;

  @Column()
  NoticeText: string;

  @Column()
  File: string;

  @Column({ type: 'date' })
  Date: Date;


}