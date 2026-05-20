
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '../../../../core/security/guards/auth.guard';
import { RolesGuard } from '../../../../core/security/guards/roles.guard';

import { GetPacienteByIdUseCase } from '../../application/use-cases/get-paciente-by-id.usecase';
import { CreatePacienteUseCase } from '../../application/use-cases/create-paciente.usecase';
import { GetAllPacientesUseCase } from '../../application/use-cases/get-all-pacientes.usecase';

@Controller('paciente')
@UseGuards(AuthGuard, RolesGuard)
export class PacienteController {
  constructor(
    private readonly getPacienteById: GetPacienteByIdUseCase,
    private readonly createPaciente: CreatePacienteUseCase,
    private readonly getAllPacientes: GetAllPacientesUseCase,
  ) {}

  @Get()
  findAll() {
    return this.getAllPacientes.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getPacienteById.execute(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.createPaciente.execute(body);
  }
}
