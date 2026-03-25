// ARCHIVO: src/modules/detalle-clinico/application/use-cases/get-signos-vitales-by-hce.usecase.ts
import type { SignosVitales } from '../../domain/entities/signos-vitales.entity';
import type { SignosVitalesRepository } from '../../domain/repositories/signos-vitales.repository';

export class GetSignosVitalesByHceUseCase {
  constructor(private readonly signosRepository: SignosVitalesRepository) {}

  execute(idHce: string): Promise<SignosVitales[]> {
    return this.signosRepository.findByHce(idHce);
  }
}