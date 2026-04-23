import type { PublicidadRepository } from '../../domain/repositories/publicidad.repository';

export class UpdatePublicidadPagoUseCase {
  constructor(private readonly publicidadRepository: PublicidadRepository) {}

  update(entity: any): Promise<any> {
    return this.publicidadRepository.updatePago(entity);
  }
}