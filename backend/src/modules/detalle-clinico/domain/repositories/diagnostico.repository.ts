// ARCHIVO: src/modules/detalle-clinico/domain/repositories/diagnostico.repository.ts
import type { Diagnostico } from '../entities/diagnostico.entity.js';

export interface DiagnosticoRepository {
  save(diagnostico: Diagnostico): Promise<Diagnostico>;
  findById(idDiag: string): Promise<Diagnostico | null>;
  findByHce(idHce: string): Promise<Diagnostico[]>;
  update(diagnostico: Diagnostico): Promise<Diagnostico>;
  delete(idDiag: string): Promise<void>;
}