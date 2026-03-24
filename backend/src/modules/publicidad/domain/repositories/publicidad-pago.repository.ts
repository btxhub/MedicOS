// ARCHIVO: src/modules/publicidad/domain/repositories/publicidad-pago.repository.ts
import type { PublicidadPago } from '../entities/publicidad-pago.entity';

export interface PublicidadPagoRepository {
  save(entity: PublicidadPago): Promise<PublicidadPago>;
  findById(id: string): Promise<PublicidadPago | null>;
  update(entity: PublicidadPago): Promise<PublicidadPago>;
  delete(id: string): Promise<void>;
}