// ARCHIVO: src/modules/detalle-clinico/domain/repositories/evolucion.repository.ts
import type { Evolucion } from '../entities/evolucion.entity';

export interface EvolucionRepository {
  save(evolucion: Evolucion): Promise<Evolucion>;
  findById(idEvo: string): Promise<Evolucion | null>;
  findByHce(idHce: string): Promise<Evolucion[]>;
  update(evolucion: Evolucion): Promise<Evolucion>;
  delete(idEvo: string): Promise<void>;
}