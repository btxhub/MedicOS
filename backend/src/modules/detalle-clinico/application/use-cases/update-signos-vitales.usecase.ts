import { SignosVitales } from '../../domain/entities/signos-vitales.entity';
import type { SignosVitalesRepository } from '../../domain/repositories/signos-vitales.repository';

export class UpdateSignosVitalesUseCase {
  constructor(private readonly repository: SignosVitalesRepository) {}

  async execute(data: any): Promise<SignosVitales> {
    const entity = new SignosVitales(
      data.id,
      data.idHce,
      data.presionArterial,
      data.frecuenciaCardiaca,
      data.frecuenciaRespiratoria,
      data.temperatura,
      data.saturacionOxigeno,
      data.peso,
      data.talla,
      data.createdAt
    );

    return this.repository.update(entity);
  }
}