// ARCHIVO: src/modules/detalle-clinico/application/use-cases/create-receta.usecase.ts
import type { Receta } from '../../domain/entities/receta.entity';
import type { RecetaRepository } from '../../domain/repositories/receta.repository';

export class CreateRecetaUseCase {
  constructor(private readonly recetaRepository: RecetaRepository) {}

  execute(receta: Receta): Promise<Receta> {
    return this.recetaRepository.save(receta);
  }
}