// ARCHIVO: src/modules/detalle-clinico/application/use-cases/delete-adjunto.usecase.ts
import type { AdjuntoRepository } from '../../domain/repositories/adjunto.repository';

export class DeleteAdjuntoUseCase {
  constructor(private readonly adjuntoRepository: AdjuntoRepository) {}

  execute(idAdj: string): Promise<void> {
    return this.adjuntoRepository.delete(idAdj);
  }
}