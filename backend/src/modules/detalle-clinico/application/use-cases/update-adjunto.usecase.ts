// ARCHIVO: src/modules/detalle-clinico/application/use-cases/update-adjunto.usecase.ts
import type { Adjunto } from '../../domain/entities/adjunto.entity';
import type { AdjuntoRepository } from '../../domain/repositories/adjunto.repository';

export class UpdateAdjuntoUseCase {
  constructor(private readonly adjuntoRepository: AdjuntoRepository) {}

  execute(adjunto: Adjunto): Promise<Adjunto> {
    return this.adjuntoRepository.update(adjunto);
  }
}