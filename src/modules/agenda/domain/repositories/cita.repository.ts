// ARCHIVO: src/modules/agenda/domain/repositories/cita.repository.ts
import type { Cita } from '../entities/cita.entity';

export interface CitaRepository {
  save(entity: Cita): Promise<Cita>;
  findById(id: string): Promise<Cita | null>;
  update(entity: Cita): Promise<Cita>;
  delete(id: string): Promise<void>;
}