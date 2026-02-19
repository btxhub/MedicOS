import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

const trim = () =>
  Transform(({ value }) => (typeof value === 'string' ? value.trim() : value));

export class CreatePacienteDto {
  @IsString()
  @IsNotEmpty()
  @trim()
  nombres!: string;

  @IsString()
  @IsNotEmpty()
  @trim()
  apellidos!: string;

  @IsString()
  @IsNotEmpty()
  @trim()
  documentoIdentidad!: string;

  @IsDateString()
  fechaNacimiento!: string;

  @IsString()
  @IsOptional()
  @trim()
  telefono?: string;

  @IsEmail()
  @IsOptional()
  @trim()
  email?: string;

  @IsString()
  @IsOptional()
  @trim()
  direccion?: string;
}
