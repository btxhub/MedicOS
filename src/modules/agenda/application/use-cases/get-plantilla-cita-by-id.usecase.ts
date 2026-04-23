// ARCHIVO: src/modules/agenda/application/use-cases/get-plantilla-cita-by-id.usecase.ts
import type { PlantillaCita } from '../../domain/entities/plantilla-cita.entity';
import type { PlantillaCitaRepository } from '../../domain/repositories/plantilla-cita.repository';

export class GetPlantillaCitaByIdUseCase {
  constructor(private readonly plantillaCitaRepository: PlantillaCitaRepository) {}

  execute(id: string): Promise<PlantillaCita | null> {
    return this.plantillaCitaRepository.findById(id);
  }
}