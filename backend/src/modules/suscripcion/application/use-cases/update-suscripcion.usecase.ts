// ARCHIVO: src/modules/suscripcion/application/use-cases/update-suscripcion.usecase.ts
import type { Suscripcion } from '../../domain/entities/suscripcion.entity';
import type { SuscripcionRepository } from '../../domain/repositories/suscripcion.repository';

export class UpdateSuscripcionUseCase {
  constructor(private readonly suscripcionRepository: SuscripcionRepository) {}

  update(entity: Suscripcion): Promise<Suscripcion> {
    return this.suscripcionRepository.update(entity);
  }
}