import { IsString, IsOptional, IsDateString, IsEmail } from 'class-validator';

export class CreatePacienteDto {

  @IsString()
  nomPac: string;

  @IsString()
  apePatPac: string;

  @IsOptional()
  @IsString()
  apeMatPac?: string;

  @IsOptional()
  @IsString()
  docIdPac?: string;

  @IsOptional()
  @IsDateString()
  fechaNacPac?: string;

  @IsOptional()
  @IsString()
  sexoPac?: string;

  @IsOptional()
  @IsString()
  celPac?: string;

  @IsOptional()
  @IsString()
  telPac?: string;

  @IsOptional()
  @IsString()
  waPac?: string;

  @IsOptional()
  @IsEmail()
  emailPac?: string;

  @IsOptional()
  @IsString()
  dirPac?: string;

  @IsOptional()
  @IsString()
  grupoSangPac?: string;

  @IsOptional()
  @IsString()
  seguroPac?: string;

}
