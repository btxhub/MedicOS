// ARCHIVO: src/modules/suscripcion/application/use-cases/update-pago-suscripcion.usecase.ts
import type { PagoSuscripcion } from '../../domain/entities/pago-suscripcion.entity';
import type { PagoSuscripcionRepository } from '../../domain/repositories/pago-suscripcion.repository';

export class UpdatePagoSuscripcionUseCase {
  constructor(private readonly pagoSuscripcionRepository: PagoSuscripcionRepository) {}

  update(entity: PagoSuscripcion): Promise<PagoSuscripcion> {
    return this.pagoSuscripcionRepository.update(entity);
  }
}