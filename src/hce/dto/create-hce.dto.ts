import { IsString, IsNotEmpty } from 'class-validator';

export class CreateHceDto {

  @IsString()
  @IsNotEmpty()
  patientId: string;

}