import type { Publicidad } from '../../domain/entities/publicidad.entity';
import type { PublicidadRepository } from '../../domain/repositories/publicidad.repository';

export class GetPublicidadByIdUseCase {
  constructor(private readonly publicidadRepository: PublicidadRepository) {}

  getById(id: string): Promise<Publicidad | null> {
    return this.publicidadRepository.findById(id);
  }
}