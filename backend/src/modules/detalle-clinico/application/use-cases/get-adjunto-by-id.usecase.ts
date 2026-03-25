// ARCHIVO: src/modules/detalle-clinico/application/use-cases/get-adjunto-by-id.usecase.ts
import type { Adjunto } from '../../domain/entities/adjunto.entity';
import type { AdjuntoRepository } from '../../domain/repositories/adjunto.repository';

export class GetAdjuntoByIdUseCase {
  constructor(private readonly adjuntoRepository: AdjuntoRepository) {}

  execute(idAdj: string): Promise<Adjunto | null> {
    return this.adjuntoRepository.findById(idAdj);
  }
}