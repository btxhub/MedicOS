import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateEvolutionDto {
  @IsString()
  @IsNotEmpty()
  notaClinica: string;
}