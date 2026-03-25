// ARCHIVO: src/modules/detalle-clinico/application/use-cases/get-evolucion-by-id.usecase.ts
import type { Evolucion } from '../../domain/entities/evolucion.entity';
import type { EvolucionRepository } from '../../domain/repositories/evolucion.repository';

export class GetEvolucionByIdUseCase {
  constructor(private readonly evolucionRepository: EvolucionRepository) {}

  execute(idEvo: string): Promise<Evolucion | null> {
    return this.evolucionRepository.findById(idEvo);
  }
}