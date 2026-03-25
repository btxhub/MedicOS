// ARCHIVO: src/modules/detalle-clinico/application/use-cases/get-receta-by-id.usecase.ts
import type { Receta } from '../../domain/entities/receta.entity';
import type { RecetaRepository } from '../../domain/repositories/receta.repository';

export class GetRecetaByIdUseCase {
  constructor(private readonly recetaRepository: RecetaRepository) {}

  execute(idRec: string): Promise<Receta | null> {
    return this.recetaRepository.findById(idRec);
  }
}