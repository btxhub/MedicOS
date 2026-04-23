// ARCHIVO: src/modules/paciente/presentation/controllers/paciente.controller.ts

import { Controller, Get } from '@nestjs/common';
import { GetAllPacientesUseCase } from '../../application/use-cases/get-all-pacientes.usecase';

@Controller('paciente')
export class PacienteController {
  constructor(
    private readonly getAllPacientesUseCase: GetAllPacientesUseCase,
  ) {}

  @Get()
  async findAll() {
    return this.getAllPacientesUseCase.execute();
  }
}