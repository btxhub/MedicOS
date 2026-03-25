// ARCHIVO: src/modules/paciente/application/use-cases/create-paciente.usecase.ts
import type { Paciente } from '../../domain/entities/paciente.entity';
import type { PacienteRepository } from '../../domain/repositories/paciente.repository';

export class CreatePacienteUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  create(entity: Paciente): Promise<Paciente> {
    return this.pacienteRepository.save(entity);
  }
}