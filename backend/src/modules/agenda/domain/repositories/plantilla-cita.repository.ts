// ARCHIVO: src/modules/agenda/domain/repositories/plantilla-cita.repository.ts
import type { PlantillaCita } from '../entities/plantilla-cita.entity';

export interface PlantillaCitaRepository {
  save(entity: PlantillaCita): Promise<PlantillaCita>;
  findById(id: string): Promise<PlantillaCita | null>;
  update(entity: PlantillaCita): Promise<PlantillaCita>;
  delete(id: string): Promise<void>;
}