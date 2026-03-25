// ARCHIVO: src/modules/detalle-clinico/domain/repositories/tratamiento.repository.ts
import type { Tratamiento } from '../entities/tratamiento.entity';

export interface TratamientoRepository {
  save(tratamiento: Tratamiento): Promise<Tratamiento>;
  findById(idTrat: string): Promise<Tratamiento | null>;
  findByHce(idHce: string): Promise<Tratamiento[]>;
  update(tratamiento: Tratamiento): Promise<Tratamiento>;
  delete(idTrat: string): Promise<void>;
}