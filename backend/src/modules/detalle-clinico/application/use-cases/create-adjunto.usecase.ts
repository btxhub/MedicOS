// ARCHIVO: src/modules/detalle-clinico/application/use-cases/create-adjunto.usecase.ts
import type { Adjunto } from '../../domain/entities/adjunto.entity';
import type { AdjuntoRepository } from '../../domain/repositories/adjunto.repository';

export class CreateAdjuntoUseCase {
  constructor(private readonly adjuntoRepository: AdjuntoRepository) {}

  execute(adjunto: Adjunto): Promise<Adjunto> {
    return this.adjuntoRepository.save(adjunto);
  }
}