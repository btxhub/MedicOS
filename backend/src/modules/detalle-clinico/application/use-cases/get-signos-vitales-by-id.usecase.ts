// ARCHIVO: src/modules/detalle-clinico/application/use-cases/get-signos-vitales-by-id.usecase.ts
import type { SignosVitales } from '../../domain/entities/signos-vitales.entity';
import type { SignosVitalesRepository } from '../../domain/repositories/signos-vitales.repository';

export class GetSignosVitalesByIdUseCase {
  constructor(private readonly signosRepository: SignosVitalesRepository) {}

  execute(idSig: string): Promise<SignosVitales | null> {
    return this.signosRepository.findById(idSig);
  }
}