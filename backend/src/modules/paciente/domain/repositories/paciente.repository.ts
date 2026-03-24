// ARCHIVO: src/modules/paciente/domain/repositories/paciente.repository.ts
import type { Paciente } from '../entities/paciente.entity';

export interface PacienteRepository {
  save(entity: Paciente): Promise<Paciente>;
  findById(id: string): Promise<Paciente | null>;
  update(entity: Paciente): Promise<Paciente>;
  delete(id: string): Promise<void>;
}