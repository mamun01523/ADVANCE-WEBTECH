import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, UsePipes, ValidationPipe, Session, UnauthorizedException, UseGuards, UseInterceptors, UploadedFile,  } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentLoginDTO } from './dto/studentLogin.dto';
import { StudentPassChangeDTO } from './dto/studentPassChange.dto';
import { SessionGuard } from './session.guard';
import { StudentEntity } from './entities/student.entity';
import { MulterError, diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { StudentDTO } from './dto/student.dto';
import { resultEntity } from './entities/result.entity';
import { ComplainBoxEntity } from './entities/complainbox.entity';
import { ComplainBoxDTO } from './dto/complainBox.dto';
import { SubjectEntity } from './entities/subject.entity';
import { TeacherStudentEntity } from './entities/teacherStudent.entity';
import { teacherStudentDTO } from './dto/teacherStudent.dto';
import { examEntity } from './entities/exam.entity';
import { TeacherEntity } from './entities/teacher.entity';

@Controller('student')
export class StudentController {
  
  constructor(private readonly studentService: StudentService) {}

    //Student Login
  @Post("/login")
  @UsePipes(new ValidationPipe())
  async login(@Session() session, @Body() loginData:StudentLoginDTO){
    const logdata = await this.studentService.login(loginData)
    if(logdata == "Login Success"){
      session.email = loginData.Email
      return (session.email)
  
    }
    else{
      throw new UnauthorizedException({ message: "invalid credentials" });
    }
  }

  //Student Change Password
  @Patch("/changepassword/:Id")
  @UsePipes(new ValidationPipe())
  async passwordChange(@Param("Id") Id:number, @Body() newPass:StudentPassChangeDTO){
    return await this.studentService.passwordChange(Id, newPass)
  }

  //Student View Profile
  @Get("/viewprofile")
  @UseGuards(SessionGuard)
  async viewprofile(@Session() session):Promise<StudentEntity>{
    return this.studentService.viewprofile(session.email)
  }

  //View Result
  @Get("/viewresult")
  async viewResult():Promise<resultEntity[]>{
    return await this.studentService.viewResult()
  }
  //View Exam
  @Get("/viewexam")
  async viewExam():Promise<examEntity[]>{
    return await this.studentService.viewExam()
  }
  //View Teacher
  @Get("/viewteacher")
  async viewTeacher():Promise<TeacherEntity[]>{
    return await this.studentService.viewTeacher()
  }

  //Post Complain
  @Post("/postcomplain")
  @UseGuards(SessionGuard)
  @UsePipes(new ValidationPipe())
  async complainbox(@Body() complainboxData:ComplainBoxDTO):Promise<ComplainBoxEntity>{
    return await this.studentService.complainbox(complainboxData)
  }
  
  //View Complain 
  @Get("/viewcomplain")
  async viewcomplain():Promise<ComplainBoxEntity[]>{
    return await this.studentService.viewcomplain()
  }

  //Delete Complain
  @Delete("/deletecomplain/:Id")
  async deletecomplain(@Param("Id") Id:number){
    return await this.studentService.deletecomplain(Id)
  }

  //Update Profile Picture
  @Patch("updatepicture/:id")
  @UseInterceptors(FileInterceptor('myfile',{fileFilter:(req, file, cb)=>{
    if(file.originalname.match(/^.*\.(jpg|webp|png|jepg)$/)){
      cb(null, true)
    }else{
      cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false)
    }
  }, limits:{fileSize: 300000}, storage: diskStorage({destination: './uploadFile', filename: function(req, file, cb){
    cb(null, Date.now()+file.originalname)}})   
  }))

  async updateprofile(@Param("id") id:number, @Body() updateProfile, @UploadedFile() file: Express.Multer.File){
    updateProfile.ProfilePicture = file.filename
    return await this.studentService.updateprofile(id, updateProfile)
  }

  //Logout
  @Get('/logout')
  signout(@Session() session){
  if(session.destroy())
    {
    return {message:"you are logged out"};
    }
  else
    {
    throw new UnauthorizedException("invalid actions");
    }
  }

  //Forget password
  @Get("/forgetpass")
  async forgetPass(@Session() session, @Body() Email){
    var ex = await this.studentService.forgetPass(Email);

    if(ex == true){
      session.temp = Email.Email
      return "Email found"
    }
    else{
      throw new UnauthorizedException({ message: "invalid credentials" });
    }
  }

  @Patch("/forgetpasschange")
  async forgetPassChange(@Session() session, @Body() newpass){
    if(newpass.StudentPassword == newpass.ConfirmPassword){
      return await this.studentService.forgetPassChange(session.temp, newpass)
    }
    else{
      return "password not match"
    }
    
  }
  

  //View Subject
  @Get("/viewsubject")
  async viewsubject():Promise<SubjectEntity[]>{
    return await this.studentService.viewsubject()
  }

  //Class Routine View by Class and Section
  @Get("/viewclassroutine")
  async classroutine(@Query("Class") Class:any, @Query("Section") Section:any){
    return await this.studentService.classroutine(Class, Section)
  }

  //Exam Routine View by Class and Section
  @Get("/viewexamroutine")
  async examroutine(@Query("Class") Class:any, @Query("Section") Section:any){
    return await this.studentService.examroutine(Class, Section)
  }
  
  //Find Result By Id
  @Get("/findresultby/:Id")
  
  async findresultby(@Param("Id") Id:number){
    return await this.studentService.findresultby(Id)
  }

  
  //Post Massage
  @Post("/postmassage")
  @UsePipes(new ValidationPipe())
  async massage(@Body() massageData:teacherStudentDTO):Promise<TeacherStudentEntity>{
    return await this.studentService.massage(massageData)
  }

  //View Massage
  @Get("/viewmassage")
  async viewmassage():Promise<TeacherStudentEntity[]>{
    return await this.studentService.viewmassage()
  }

  //Delete Massage
  @Delete("/deletemassage/:Id")
  async deletemassage(@Param("Id") Id:number){
    return await this.studentService.deletemassage(Id)
  }

  //Class Note View by Class and Section//
  @Get("/viewclassnote")
  async classnote(@Query("Class") Class:any, @Query("Section") Section:any){
    return await this.studentService.classnote(Class, Section)
  }

  //Find Note By Id
  @Get("/findnoteby/:Id")
  async findnoteby(@Param("Id") Id:number){
    return await this.studentService.findnoteby(Id)
  }

  //Find Note By Name
  @Get("/findnotebytitle/:notetitle")
  async findnotebytile(@Param("notetitle") Title:string){
    return await this.studentService.findnotebytitle(Title)
  }

}
