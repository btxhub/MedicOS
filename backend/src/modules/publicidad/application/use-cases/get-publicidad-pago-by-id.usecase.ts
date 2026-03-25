// ARCHIVO: src/modules/publicidad/application/use-cases/get-publicidad-pago-by-id.usecase.ts
import type { PublicidadPago } from '../../domain/entities/publicidad-pago.entity';
import type { PublicidadPagoRepository } from '../../domain/repositories/publicidad-pago.repository';

export class GetPublicidadPagoByIdUseCase {
  constructor(private readonly publicidadPagoRepository: PublicidadPagoRepository) {}

  execute(id: string): Promise<PublicidadPago | null> {
    return this.publicidadPagoRepository.findById(id);
  }
}