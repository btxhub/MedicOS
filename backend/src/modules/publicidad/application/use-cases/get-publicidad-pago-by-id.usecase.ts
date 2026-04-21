import type { PublicidadPago } from '../../domain/entities/publicidad-pago.entity';
import type { PublicidadRepository } from '../../domain/repositories/publicidad.repository';

export class GetPublicidadPagoByIdUseCase {
  constructor(private readonly publicidadRepository: PublicidadRepository) {}

  getById(id: string): Promise<PublicidadPago | null> {
    return this.publicidadRepository.findPagoById(id);
  }
}