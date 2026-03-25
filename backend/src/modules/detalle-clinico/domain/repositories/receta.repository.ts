// ARCHIVO: src/modules/detalle-clinico/domain/repositories/receta.repository.ts
import type { Receta } from '../entities/receta.entity';

export interface RecetaRepository {
  save(receta: Receta): Promise<Receta>;
  findById(idRec: string): Promise<Receta | null>;
  findByHce(idHce: string): Promise<Receta[]>;
  update(receta: Receta): Promise<Receta>;
  delete(idRec: string): Promise<void>;
}