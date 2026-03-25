// ARCHIVO: src/modules/paciente/application/use-cases/delete-paciente.usecase.ts
import type { PacienteRepository } from '../../domain/repositories/paciente.repository';

export class DeletePacienteUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  delete(id: string): Promise<void> {
    return this.pacienteRepository.delete(id);
  }
}