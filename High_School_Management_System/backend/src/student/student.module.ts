import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { classEntity } from './entities/class.entity';
import { sectionEntity } from './entities/section.entity';
import { examRoutineEntity } from './entities/examRoutine.entity';
import { examEntity } from './entities/exam.entity';
import { classRoutineEntity } from './entities/classRoutine.entity';
import { examtypeEntity } from './entities/examType.entity';
import { gradeEntity } from './entities/grade.Entity';
import { TeacherEntity } from './entities/teacher.entity';
import { DepartmentEntity } from './entities/department.entity';
import { SubjectEntity } from './entities/subject.entity';
import { resultEntity } from './entities/result.entity';
import { SubjectTeacherEntity } from './entities/subjectTeacher.entity';
import { ComplainBoxEntity } from './entities/complainbox.entity';
import { NoteEntity } from './entities/note.entity';
import { NoticeEntity } from './entities/notice.entity';
import { TeacherStudentEntity } from './entities/teacherStudent.entity';


@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity,classEntity, sectionEntity, examtypeEntity, classRoutineEntity, examEntity, 
    examRoutineEntity, gradeEntity,TeacherEntity,DepartmentEntity, SubjectEntity, resultEntity,SubjectTeacherEntity,ComplainBoxEntity,
     NoteEntity,NoticeEntity, TeacherStudentEntity])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
