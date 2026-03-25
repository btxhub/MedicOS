// ARCHIVO: src/modules/paciente/application/use-cases/update-paciente.usecase.ts
import type { Paciente } from '../../domain/entities/paciente.entity';
import type { PacienteRepository } from '../../domain/repositories/paciente.repository';

export class UpdatePacienteUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  update(entity: Paciente): Promise<Paciente> {
    return this.pacienteRepository.update(entity);
  }
}