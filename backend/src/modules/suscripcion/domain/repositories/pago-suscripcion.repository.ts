// ARCHIVO: src/modules/suscripcion/domain/repositories/pago-suscripcion.repository.ts
import type { PagoSuscripcion } from '../entities/pago-suscripcion.entity';

export interface PagoSuscripcionRepository {
  save(entity: PagoSuscripcion): Promise<PagoSuscripcion>;
  findById(id: string): Promise<PagoSuscripcion | null>;
  update(entity: PagoSuscripcion): Promise<PagoSuscripcion>;
  delete(id: string): Promise<void>;
}