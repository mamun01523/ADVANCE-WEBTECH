import { IsNotEmpty } from "class-validator";

export class ComplainBoxDTO{
    ID: number;

    @IsNotEmpty({message: 'Complain massage can not be Empty'})
    massage: string;

    senddate: Date;
}