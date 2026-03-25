// ARCHIVO: src/modules/paciente/application/use-cases/delete-paciente-seguro.usecase.ts
import type { PacienteSeguroRepository } from '../../domain/repositories/paciente-seguro.repository';

export class DeletePacienteSeguroUseCase {
  constructor(private readonly pacienteSeguroRepository: PacienteSeguroRepository) {}

  delete(id: string): Promise<void> {
    return this.pacienteSeguroRepository.delete(id);
  }
}