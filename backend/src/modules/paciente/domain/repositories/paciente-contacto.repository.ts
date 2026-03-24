// ARCHIVO: src/modules/paciente/domain/repositories/paciente-contacto.repository.ts
import type { PacienteContacto } from '../entities/paciente-contacto.entity';

export interface PacienteContactoRepository {
  save(entity: PacienteContacto): Promise<PacienteContacto>;
  findById(id: string): Promise<PacienteContacto | null>;
  update(entity: PacienteContacto): Promise<PacienteContacto>;
  delete(id: string): Promise<void>;
}