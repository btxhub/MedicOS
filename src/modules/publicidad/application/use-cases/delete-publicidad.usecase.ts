// ARCHIVO: src/modules/publicidad/application/use-cases/delete-publicidad.usecase.ts

import type { PublicidadRepository } from '../../domain/repositories/publicidad.repository';

export class DeletePublicidadUseCase {
  constructor(private readonly publicidadRepository: PublicidadRepository) {}

  delete(id: string): Promise<void> {
    return this.publicidadRepository.delete(id);
  }
}