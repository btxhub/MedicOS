// ARCHIVO: src/modules/detalle-clinico/application/use-cases/get-evolucion-by-hce.usecase.ts
import type { Evolucion } from '../../domain/entities/evolucion.entity';
import type { EvolucionRepository } from '../../domain/repositories/evolucion.repository';

export class GetEvolucionByHceUseCase {
  constructor(private readonly evolucionRepository: EvolucionRepository) {}

  execute(idHce: string): Promise<Evolucion[]> {
    return this.evolucionRepository.findByHce(idHce);
  }
}