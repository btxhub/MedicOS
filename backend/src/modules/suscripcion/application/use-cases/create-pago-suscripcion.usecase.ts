// ARCHIVO: src/modules/suscripcion/application/use-cases/create-pago-suscripcion.usecase.ts
import type { PagoSuscripcion } from '../../domain/entities/pago-suscripcion.entity';
import type { PagoSuscripcionRepository } from '../../domain/repositories/pago-suscripcion.repository';

export class CreatePagoSuscripcionUseCase {
  constructor(private readonly pagoSuscripcionRepository: PagoSuscripcionRepository) {}

  create(entity: PagoSuscripcion): Promise<PagoSuscripcion> {
    return this.pagoSuscripcionRepository.save(entity);
  }
}