// ARCHIVO: src/modules/detalle-clinico/application/use-cases/get-adjunto-by-hce.usecase.ts
import type { Adjunto } from '../../domain/entities/adjunto.entity';
import type { AdjuntoRepository } from '../../domain/repositories/adjunto.repository';

export class GetAdjuntoByHceUseCase {
  constructor(private readonly adjuntoRepository: AdjuntoRepository) {}

  execute(idHce: string): Promise<Adjunto[]> {
    return this.adjuntoRepository.findByHce(idHce);
  }
}