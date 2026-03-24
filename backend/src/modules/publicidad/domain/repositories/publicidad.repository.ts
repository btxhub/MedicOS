// ARCHIVO: src/modules/publicidad/domain/repositories/publicidad.repository.ts
import type { Publicidad } from '../entities/publicidad.entity';

export interface PublicidadRepository {
  save(entity: Publicidad): Promise<Publicidad>;
  findById(id: string): Promise<Publicidad | null>;
  update(entity: Publicidad): Promise<Publicidad>;
  delete(id: string): Promise<void>;
}