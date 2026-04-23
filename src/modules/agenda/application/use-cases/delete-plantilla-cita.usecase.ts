// ARCHIVO: src/modules/agenda/application/use-cases/delete-plantilla-cita.usecase.ts
import type { PlantillaCitaRepository } from '../../domain/repositories/plantilla-cita.repository';

export class DeletePlantillaCitaUseCase {
  constructor(private readonly plantillaCitaRepository: PlantillaCitaRepository) {}

  delete(id: string): Promise<void> {
    return this.plantillaCitaRepository.delete(id);
  }
}