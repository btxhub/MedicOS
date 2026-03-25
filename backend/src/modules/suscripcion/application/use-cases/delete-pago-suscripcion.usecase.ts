// ARCHIVO: src/modules/suscripcion/application/use-cases/delete-pago-suscripcion.usecase.ts
import type { PagoSuscripcionRepository } from '../../domain/repositories/pago-suscripcion.repository';

export class DeletePagoSuscripcionUseCase {
  constructor(private readonly pagoSuscripcionRepository: PagoSuscripcionRepository) {}

  delete(id: string): Promise<void> {
    return this.pagoSuscripcionRepository.delete(id);
  }
}