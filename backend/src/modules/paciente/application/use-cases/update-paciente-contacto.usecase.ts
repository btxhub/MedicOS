// ARCHIVO: src/modules/paciente/application/use-cases/update-paciente-contacto.usecase.ts
import type { PacienteContacto } from '../../domain/entities/paciente-contacto.entity';
import type { PacienteContactoRepository } from '../../domain/repositories/paciente-contacto.repository';

export class UpdatePacienteContactoUseCase {
  constructor(private readonly pacienteContactoRepository: PacienteContactoRepository) {}

  update(entity: PacienteContacto): Promise<PacienteContacto> {
    return this.pacienteContactoRepository.update(entity);
  }
}