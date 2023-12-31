import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StudentEntity } from './entities/student.entity';
import { classEntity } from './entities/class.entity';
import { examRoutineEntity } from './entities/examRoutine.entity';
import { examEntity } from './entities/exam.entity';
import { classRoutineEntity } from './entities/classRoutine.entity';
import { examtypeEntity } from './entities/examType.entity';
import { sectionEntity } from './entities/section.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { gradeEntity } from './entities/grade.Entity';
import { TeacherEntity } from './entities/teacher.entity';
import { DepartmentEntity } from './entities/department.entity';
import { SubjectEntity } from './entities/subject.entity';
import { StudentLoginDTO } from './dto/studentLogin.dto';
import * as bcrypt from 'bcrypt';
import { StudentPassChangeDTO } from './dto/studentPassChange.dto';
import { resultEntity } from './entities/result.entity';
import { ComplainBoxEntity } from './entities/complainbox.entity';
import { ComplainBoxDTO } from './dto/complainBox.dto';
import { TeacherStudentEntity } from './entities/teacherStudent.entity';
import { teacherStudentDTO } from './dto/teacherStudent.dto';
import { NoteEntity } from './entities/note.entity';



@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity) private StudentRepository: Repository<StudentEntity>,
    @InjectRepository(classEntity) private ClassRepository: Repository<classEntity>,
    @InjectRepository(sectionEntity) private SectionRepository: Repository<sectionEntity>,
    @InjectRepository(examtypeEntity) private examtypeRepository: Repository<examtypeEntity>,
    @InjectRepository(classRoutineEntity) private classRoutineRepository: Repository<classRoutineEntity>,
    @InjectRepository(examEntity) private examRepository: Repository<examEntity>,
    @InjectRepository(examRoutineEntity) private examRoutineRepository: Repository<examRoutineEntity>,
    @InjectRepository(gradeEntity) private gradeRepository: Repository<gradeEntity>,
    @InjectRepository(TeacherEntity) private TeacherRepository: Repository<TeacherEntity>,
    @InjectRepository(DepartmentEntity) private DepartmentRepository: Repository<DepartmentEntity>,
    @InjectRepository(SubjectEntity) private SubjectRepository: Repository<SubjectEntity>,
    @InjectRepository(resultEntity) private ResultRepository: Repository<resultEntity>,
    @InjectRepository(ComplainBoxEntity) private ComplainBoxRepository: Repository<ComplainBoxEntity>,
    @InjectRepository(TeacherStudentEntity) private TeacherStudentRepository: Repository<TeacherStudentEntity>,
    @InjectRepository(NoteEntity) private NoteRepository: Repository<NoteEntity>,
    
  ) {}

  //Student Login
  async login(loginData:StudentLoginDTO){
    if(loginData.Email != null && loginData.StudentPassword != null){
      const exData = await this.StudentRepository.findOneBy({Email:loginData.Email})
      const isMatch = await bcrypt.compare(loginData.StudentPassword, exData.StudentPassword)

      if(isMatch){
        return "Login Success"
      }else{
        return "User Not Found"
      }
    }else{
      return "Email or Password Blank"
    }
  }

  //Student Password Change
  
  async passwordChange(Id:number, newPass:StudentPassChangeDTO){

    const salt = await bcrypt.genSalt()
    const hassedpassed = await bcrypt.hash(newPass.StudentPassword, salt)

    newPass.StudentPassword = hassedpassed

    return await this.StudentRepository.update(Id, newPass)
  }
  
    //Student View Profile
  async viewprofile(email: string):Promise<any>{
    try{
      const data = await this.StudentRepository.findOne({
        select:{
          FirstName: true,
          LastName: true,
          FatherName: true,
          MotherName: true,
          Email: true,
          ContactNumber: true,
          Gender: true,
          DateOfBirth: true,
          Address: true,
          AdmissionDate:true,
          ProfilePicture:true,
          Status:true
        },
        where:{
          Email:email
        }
      })

      if(data!=null){
        return data
      }else{
        return "User Not Found"
      }
    }catch(error){
      return error
    }
  }

  //View Result
  async viewResult():Promise<resultEntity[]>{
    return await this.ResultRepository.find({
      relations:{
        Student:true
      }
    })
  }
  //View Exam
  async viewExam():Promise<examEntity[]>{
    return await this.examRepository.find()
  }
  //View Teacher
  async viewTeacher():Promise<TeacherEntity[]>{
    return await this.TeacherRepository.find()
  }
  
  // Post Complain
  async complainbox(complainboxData:ComplainBoxDTO):Promise<ComplainBoxEntity>{
    return await this.ComplainBoxRepository.save(complainboxData)
  }
  
  //View Complain
  async viewcomplain():Promise<ComplainBoxEntity[]>{
    return await this.ComplainBoxRepository.find()
  }
  

  //Delete Complain
  async deletecomplain(Id:number){
    return await this.ComplainBoxRepository.delete(Id)
  }

   //Update Profile Picture
   async updateprofile(id:number, updateprofile){
    return await this.StudentRepository.update(id,updateprofile)
  }
  
   //Forget Password
   async forgetPass(Email){
    const ex = await this.StudentRepository.findOne({
      where:{
        Email:Email.Email
      }
    })
    if(ex!=null){
      return true
    }
    else{
      return false
    }
  }
  async forgetPassChange(Email, newpass){
    const salt = await bcrypt.genSalt()
    const hassedpassed = await bcrypt.hash(newpass.StudentPassword, salt)

    newpass.StudentPassword = hassedpassed
    const ex = await this.StudentRepository.findOne({
      where:{
        Email:Email
      }
    })
    ex.StudentPassword = newpass.StudentPassword;

    return await this.StudentRepository.update(ex.ID, ex)
  }

  //View Subject
  async viewsubject():Promise<SubjectEntity[]>{
    return await this.SubjectRepository.find()
  }

  //Student Class Routine View by Class and Section//
  async classroutine(Class:any, Section:any){
  
    return await this.classRoutineRepository.find({
      relations:{
        Class:true,
        Section:true
      
      },
      where:{
        
        Class: {ClassName: Class},
        Section:{SectionName: Section}
      }
    });
  }

  //Student Exam Routine View by Class and Section//
  async examroutine(Class:any, Section:any){
  
    return await this.examRoutineRepository.find({
      
      where:{
        
        Class: {ClassName: Class},
        Section:{SectionName: Section}
      }
    });
  }

   //Find Result By Id
  async findresultby(Id:number){
    return await this.ResultRepository.findOne({
      where:{
        ID:Id
      }
    })
  }

  
  // Post Massage
  async massage(massageData:teacherStudentDTO):Promise<TeacherStudentEntity>{
    return await this.TeacherStudentRepository.save(massageData)
  }


  //View Massage
  async viewmassage():Promise<TeacherStudentEntity[]>{
    return await this.TeacherStudentRepository.find()
  }

  //Delete Massage
  async deletemassage(Id:number){
    return await this.TeacherStudentRepository.delete(Id)
  }

  //Student View Note by Class and Section//
  async classnote(Class:any, Section:any){
  
    return await this.NoteRepository.find({
      
      where:{
        
        Class: {ClassName: Class},
        Section:{SectionName: Section}
      }
    });
  }

  //Find Note By Id
  async findnoteby(Id:number){
    return await this.NoteRepository.findOne({
      where:{
        ID:Id
      }
    })
  }

  //Find Note By Title
  async findnotebytitle(Title:string){
    return await this.NoteRepository.findOne({
      where:{
        NoteTitle:Title
      }
    })
  }




}
