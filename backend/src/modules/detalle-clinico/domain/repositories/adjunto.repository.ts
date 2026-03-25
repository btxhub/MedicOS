// ARCHIVO: src/modules/detalle-clinico/domain/repositories/adjunto.repository.ts
import type { Adjunto } from '../entities/adjunto.entity';

export interface AdjuntoRepository {
  save(adjunto: Adjunto): Promise<Adjunto>;
  findById(idAdj: string): Promise<Adjunto | null>;
  findByHce(idHce: string): Promise<Adjunto[]>;
  update(adjunto: Adjunto): Promise<Adjunto>;
  delete(idAdj: string): Promise<void>;
}