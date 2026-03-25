// ARCHIVO: src/modules/publicidad/application/use-cases/create-publicidad-pago.usecase.ts
import type { PublicidadPago } from '../../domain/entities/publicidad-pago.entity';
import type { PublicidadPagoRepository } from '../../domain/repositories/publicidad-pago.repository';

export class CreatePublicidadPagoUseCase {
  constructor(private readonly publicidadPagoRepository: PublicidadPagoRepository) {}

  create(entity: PublicidadPago): Promise<PublicidadPago> {
    return this.publicidadPagoRepository.save(entity);
  }
}