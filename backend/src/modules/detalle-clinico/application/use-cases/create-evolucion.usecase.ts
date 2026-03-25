// ARCHIVO: src/modules/detalle-clinico/application/use-cases/create-evolucion.usecase.ts
import type { Evolucion } from '../../domain/entities/evolucion.entity';
import type { EvolucionRepository } from '../../domain/repositories/evolucion.repository';

export class CreateEvolucionUseCase {
  constructor(private readonly evolucionRepository: EvolucionRepository) {}

  execute(evolucion: Evolucion): Promise<Evolucion> {
    return this.evolucionRepository.save(evolucion);
  }
}