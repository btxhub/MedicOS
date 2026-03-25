// ARCHIVO: src/modules/detalle-clinico/application/use-cases/update-receta.usecase.ts
import type { Receta } from '../../domain/entities/receta.entity';
import type { RecetaRepository } from '../../domain/repositories/receta.repository';

export class UpdateRecetaUseCase {
  constructor(private readonly recetaRepository: RecetaRepository) {}

  execute(receta: Receta): Promise<Receta> {
    return this.recetaRepository.update(receta);
  }
}