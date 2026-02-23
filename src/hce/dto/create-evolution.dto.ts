import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEvolutionDto {

  @IsString()
  @IsNotEmpty()
  notaClinica: string;

}