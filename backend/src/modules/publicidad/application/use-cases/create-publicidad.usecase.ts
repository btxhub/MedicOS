// ARCHIVO: src/modules/publicidad/application/use-cases/create-publicidad.usecase.ts
import type { Publicidad } from '../../domain/entities/publicidad.entity';
import type { PublicidadRepository } from '../../domain/repositories/publicidad.repository';

export class CreatePublicidadUseCase {
  constructor(private readonly publicidadRepository: PublicidadRepository) {}

  create(entity: Publicidad): Promise<Publicidad> {
    return this.publicidadRepository.save(entity);
  }
}