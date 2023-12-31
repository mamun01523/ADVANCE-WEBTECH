import { IsNotEmpty } from "class-validator";

export class StudentLoginDTO {
  @IsNotEmpty({message:"Should Not Empty"})
  Email: string;

  @IsNotEmpty({message:"Should Not Empty"})
  StudentPassword: string;
}