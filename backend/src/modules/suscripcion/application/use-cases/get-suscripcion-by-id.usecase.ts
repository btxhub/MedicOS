// ARCHIVO: src/modules/suscripcion/application/use-cases/get-suscripcion-by-id.usecase.ts
import type { Suscripcion } from '../../domain/entities/suscripcion.entity';
import type { SuscripcionRepository } from '../../domain/repositories/suscripcion.repository';

export class GetSuscripcionByIdUseCase {
  constructor(private readonly suscripcionRepository: SuscripcionRepository) {}

  execute(id: string): Promise<Suscripcion | null> {
    return this.suscripcionRepository.findById(id);
  }
}