// ARCHIVO: src/modules/detalle-clinico/application/use-cases/delete-receta.usecase.ts
import type { RecetaRepository } from '../../domain/repositories/receta.repository';

export class DeleteRecetaUseCase {
  constructor(private readonly recetaRepository: RecetaRepository) {}

  execute(idRec: string): Promise<void> {
    return this.recetaRepository.delete(idRec);
  }
}
