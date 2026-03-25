// ARCHIVO: src/modules/detalle-clinico/application/use-cases/get-receta-by-hce.usecase.ts
import type { Receta } from '../../domain/entities/receta.entity';
import type { RecetaRepository } from '../../domain/repositories/receta.repository';

export class GetRecetaByHceUseCase {
  constructor(private readonly recetaRepository: RecetaRepository) {}

  execute(idHce: string): Promise<Receta[]> {
    return this.recetaRepository.findByHce(idHce);
  }
}