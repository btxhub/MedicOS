// ARCHIVO: src/modules/detalle-clinico/application/use-cases/update-signos-vitales.usecase.ts
import type { SignosVitales } from '../../domain/entities/signos-vitales.entity';
import type { SignosVitalesRepository } from '../../domain/repositories/signos-vitales.repository';

export class UpdateSignosVitalesUseCase {
  constructor(private readonly signosRepository: SignosVitalesRepository) {}

  execute(signos: SignosVitales): Promise<SignosVitales> {
    return this.signosRepository.update(signos);
  }
}