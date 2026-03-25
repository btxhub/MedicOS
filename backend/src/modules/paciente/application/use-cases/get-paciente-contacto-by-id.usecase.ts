// ARCHIVO: src/modules/paciente/application/use-cases/get-paciente-contacto-by-id.usecase.ts
import type { PacienteContacto } from '../../domain/entities/paciente-contacto.entity';
import type { PacienteContactoRepository } from '../../domain/repositories/paciente-contacto.repository';

export class GetPacienteContactoByIdUseCase {
  constructor(private readonly pacienteContactoRepository: PacienteContactoRepository) {}

  execute(id: string): Promise<PacienteContacto | null> {
    return this.pacienteContactoRepository.findById(id);
  }
}