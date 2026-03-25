// ARCHIVO: src/modules/publicidad/application/use-cases/delete-publicidad-pago.usecase.ts
import type { PublicidadPagoRepository } from '../../domain/repositories/publicidad-pago.repository';

export class DeletePublicidadPagoUseCase {
  constructor(private readonly publicidadPagoRepository: PublicidadPagoRepository) {}

  delete(id: string): Promise<void> {
    return this.publicidadPagoRepository.delete(id);
  }
}