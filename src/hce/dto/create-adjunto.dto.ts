import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAdjuntoDto {

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  url: string;

}