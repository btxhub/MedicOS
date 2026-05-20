
import { Injectable, Inject } from '@nestjs/common';
import { PacienteRepository } from "../../domain/repositories/paciente.repository";

@Injectable()
export class CreatePacienteUseCase {
  constructor(
    @Inject('PacienteRepository')
    private readonly pacienteRepository: PacienteRepository
  ) {}

  async execute(data: any) {
    return this.pacienteRepository.create(data);
  }
}
