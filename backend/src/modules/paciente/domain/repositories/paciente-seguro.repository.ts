// ARCHIVO: src/modules/paciente/domain/repositories/paciente-seguro.repository.ts
import type { PacienteSeguro } from '../entities/paciente-seguro.entity';

export interface PacienteSeguroRepository {
  save(entity: PacienteSeguro): Promise<PacienteSeguro>;
  findById(id: string): Promise<PacienteSeguro | null>;
  update(entity: PacienteSeguro): Promise<PacienteSeguro>;
  delete(id: string): Promise<void>;
}