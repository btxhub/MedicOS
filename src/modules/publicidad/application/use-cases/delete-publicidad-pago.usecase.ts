import type { PublicidadRepository } from '../../domain/repositories/publicidad.repository';

export class DeletePublicidadPagoUseCase {
  constructor(private readonly publicidadRepository: PublicidadRepository) {}

  execute(id: string): Promise<void> {
    return this.publicidadRepository.deletePago(id);
  }
}