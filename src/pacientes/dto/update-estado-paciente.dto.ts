import { IsBoolean, IsDefined } from 'class-validator';

export class UpdateEstadoPacienteDto {

  @IsDefined()
  @IsBoolean()
  activo: boolean;

}