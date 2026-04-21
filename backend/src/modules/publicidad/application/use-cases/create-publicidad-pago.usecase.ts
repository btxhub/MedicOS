import type { PublicidadPago } from '../../domain/entities/publicidad-pago.entity';
import type { PublicidadRepository } from '../../domain/repositories/publicidad.repository';

export class CreatePublicidadPagoUseCase {
  constructor(private readonly publicidadRepository: PublicidadRepository) {}

  create(entity: PublicidadPago): Promise<PublicidadPago> {
    return this.publicidadRepository.savePago(entity);
  }
}