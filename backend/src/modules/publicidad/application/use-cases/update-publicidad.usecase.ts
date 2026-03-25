// ARCHIVO: src/modules/publicidad/application/use-cases/update-publicidad.usecase.ts
import type { Publicidad } from '../../domain/entities/publicidad.entity';
import type { PublicidadRepository } from '../../domain/repositories/publicidad.repository';

export class UpdatePublicidadUseCase {
  constructor(private readonly publicidadRepository: PublicidadRepository) {}

  update(entity: Publicidad): Promise<Publicidad> {
    return this.publicidadRepository.update(entity);
  }
}