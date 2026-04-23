// ARCHIVO: src/modules/agenda/application/use-cases/create-plantilla-cita.usecase.ts
import type { PlantillaCita } from '../../domain/entities/plantilla-cita.entity';
import type { PlantillaCitaRepository } from '../../domain/repositories/plantilla-cita.repository';

export class CreatePlantillaCitaUseCase {
  constructor(private readonly plantillaCitaRepository: PlantillaCitaRepository) {}

  create(entity: PlantillaCita): Promise<PlantillaCita> {
    return this.plantillaCitaRepository.save(entity);
  }
}