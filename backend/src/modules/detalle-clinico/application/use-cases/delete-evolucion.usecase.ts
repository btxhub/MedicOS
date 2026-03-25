// ARCHIVO: src/modules/detalle-clinico/application/use-cases/delete-evolucion.usecase.ts
import type { EvolucionRepository } from '../../domain/repositories/evolucion.repository';

export class DeleteEvolucionUseCase {
  constructor(private readonly evolucionRepository: EvolucionRepository) {}

  execute(idEvo: string): Promise<void> {
    return this.evolucionRepository.delete(idEvo);
  }
}