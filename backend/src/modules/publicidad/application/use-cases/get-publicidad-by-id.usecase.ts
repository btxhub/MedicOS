// ARCHIVO: src/modules/publicidad/application/use-cases/get-publicidad-by-id.usecase.ts
import type { Publicidad } from '../../domain/entities/publicidad.entity';
import type { PublicidadRepository } from '../../domain/repositories/publicidad.repository';

export class GetPublicidadByIdUseCase {
  constructor(private readonly publicidadRepository: PublicidadRepository) {}

  execute(id: string): Promise<Publicidad | null> {
    return this.publicidadRepository.findById(id);
  }
}