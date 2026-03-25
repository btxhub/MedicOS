// ARCHIVO: src/modules/paciente/application/use-cases/delete-paciente-contacto.usecase.ts
import type { PacienteContactoRepository } from '../../domain/repositories/paciente-contacto.repository';

export class DeletePacienteContactoUseCase {
  constructor(private readonly pacienteContactoRepository: PacienteContactoRepository) {}

  delete(id: string): Promise<void> {
    return this.pacienteContactoRepository.delete(id);
  }
}