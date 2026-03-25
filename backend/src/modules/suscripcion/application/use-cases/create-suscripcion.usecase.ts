// ARCHIVO: src/modules/suscripcion/application/use-cases/create-suscripcion.usecase.ts
import type { Suscripcion } from '../../domain/entities/suscripcion.entity';
import type { SuscripcionRepository } from '../../domain/repositories/suscripcion.repository';

export class CreateSuscripcionUseCase {
  constructor(private readonly suscripcionRepository: SuscripcionRepository) {}

  create(entity: Suscripcion): Promise<Suscripcion> {
    return this.suscripcionRepository.save(entity);
  }
}