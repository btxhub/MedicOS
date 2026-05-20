// ARCHIVO: src/modules/suscripcion/domain/repositories/suscripcion.repository.ts
import type { Suscripcion } from '../entities/suscripcion.entity';

export interface SuscripcionRepository {
  save(entity: Suscripcion): Promise<Suscripcion>;
  findById(id: string): Promise<Suscripcion | null>;
  update(id: number, data: any): Promise<Suscripcion>;
  delete(id: number): Promise<void>;
}
