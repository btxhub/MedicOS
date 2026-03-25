// ARCHIVO: src/modules/detalle-clinico/application/use-cases/update-evolucion.usecase.ts
import type { Evolucion } from '../../domain/entities/evolucion.entity';
import type { EvolucionRepository } from '../../domain/repositories/evolucion.repository';

export class UpdateEvolucionUseCase {
  constructor(private readonly evolucionRepository: EvolucionRepository) {}

  execute(evolucion: Evolucion): Promise<Evolucion> {
    return this.evolucionRepository.update(evolucion);
  }
}