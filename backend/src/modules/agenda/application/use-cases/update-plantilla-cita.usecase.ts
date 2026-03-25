// ARCHIVO: src/modules/agenda/application/use-cases/update-plantilla-cita.usecase.ts
import type { PlantillaCita } from '../../domain/entities/plantilla-cita.entity';
import type { PlantillaCitaRepository } from '../../domain/repositories/plantilla-cita.repository';

export class UpdatePlantillaCitaUseCase {
  constructor(private readonly plantillaCitaRepository: PlantillaCitaRepository) {}

  update(entity: PlantillaCita): Promise<PlantillaCita> {
    return this.plantillaCitaRepository.update(entity);
  }
}