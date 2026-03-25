// ARCHIVO: src/modules/suscripcion/application/use-cases/delete-suscripcion.usecase.ts
import type { SuscripcionRepository } from '../../domain/repositories/suscripcion.repository';

export class DeleteSuscripcionUseCase {
  constructor(private readonly suscripcionRepository: SuscripcionRepository) {}

  delete(id: string): Promise<void> {
    return this.suscripcionRepository.delete(id);
  }
}