// ARCHIVO: src/modules/paciente/domain/repositories/antecedente.repository.ts
import type { Antecedente } from '../entities/antecedente.entity';

export interface AntecedenteRepository {
  save(entity: Antecedente): Promise<Antecedente>;
  findById(id: string): Promise<Antecedente | null>;
  update(entity: Antecedente): Promise<Antecedente>;
  delete(id: string): Promise<void>;
}