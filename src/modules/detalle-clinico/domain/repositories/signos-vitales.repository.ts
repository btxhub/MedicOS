// ARCHIVO: src/modules/detalle-clinico/domain/repositories/signos-vitales.repository.ts
import type { SignosVitales } from '../entities/signos-vitales.entity';

export interface SignosVitalesRepository {
  save(signos: SignosVitales): Promise<SignosVitales>;
  findById(idSig: string): Promise<SignosVitales | null>;
  findByHce(idHce: string): Promise<SignosVitales[]>;
  update(signos: SignosVitales): Promise<SignosVitales>;
  delete(idSig: string): Promise<void>;
}