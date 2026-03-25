// ARCHIVO: src/modules/suscripcion/application/use-cases/get-pago-suscripcion-by-id.usecase.ts
import type { PagoSuscripcion } from '../../domain/entities/pago-suscripcion.entity';
import type { PagoSuscripcionRepository } from '../../domain/repositories/pago-suscripcion.repository';

export class GetPagoSuscripcionByIdUseCase {
  constructor(private readonly pagoSuscripcionRepository: PagoSuscripcionRepository) {}

  execute(id: string): Promise<PagoSuscripcion | null> {
    return this.pagoSuscripcionRepository.findById(id);
  }
}