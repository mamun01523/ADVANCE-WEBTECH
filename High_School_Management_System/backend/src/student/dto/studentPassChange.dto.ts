import { match } from 'assert';
import { IsNotEmpty, Matches } from 'class-validator';

export class StudentPassChangeDTO{
    @IsNotEmpty({message:"Should not empty"})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{message: "Please give A-Z, a-z, 0-9, @$!*?& and minimum 8 !"})
    StudentPassword:string
}