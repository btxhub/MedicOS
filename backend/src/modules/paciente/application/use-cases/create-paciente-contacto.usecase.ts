// ARCHIVO: src/modules/paciente/application/use-cases/create-paciente-contacto.usecase.ts
import type { PacienteContacto } from '../../domain/entities/paciente-contacto.entity';
import type { PacienteContactoRepository } from '../../domain/repositories/paciente-contacto.repository';

export class CreatePacienteContactoUseCase {
  constructor(private readonly pacienteContactoRepository: PacienteContactoRepository) {}

  create(entity: PacienteContacto): Promise<PacienteContacto> {
    return this.pacienteContactoRepository.save(entity);
  }
}