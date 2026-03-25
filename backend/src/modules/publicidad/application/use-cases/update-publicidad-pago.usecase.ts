// ARCHIVO: src/modules/publicidad/application/use-cases/update-publicidad-pago.usecase.ts
import type { PublicidadPago } from '../../domain/entities/publicidad-pago.entity';
import type { PublicidadPagoRepository } from '../../domain/repositories/publicidad-pago.repository';

export class UpdatePublicidadPagoUseCase {
  constructor(private readonly publicidadPagoRepository: PublicidadPagoRepository) {}

  update(entity: PublicidadPago): Promise<PublicidadPago> {
    return this.publicidadPagoRepository.update(entity);
  }
}