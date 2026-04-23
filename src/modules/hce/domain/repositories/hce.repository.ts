// ARCHIVO: src/modules/hce/domain/repositories/hce.repository.ts
import { Hce } from '../entities/hce.entity';

export interface HceRepository {
  save(hce: Hce): Promise<Hce>;
  findById(idHce: string): Promise<Hce | null>;
  findAll(): Promise<Hce[]>;
  update(hce: Hce): Promise<Hce>;
  delete(idHce: string): Promise<void>;
}