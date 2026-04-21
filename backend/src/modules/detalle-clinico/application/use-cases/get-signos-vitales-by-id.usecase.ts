import type { SignosVitalesRepository } from '../../domain/repositories/signos-vitales.repository';
import { SignosVitales } from '../../domain/entities/signos-vitales.entity';

export class GetSignosVitalesByIdUseCase {
  constructor(private readonly repository: SignosVitalesRepository) {}

  async execute(id: string): Promise<SignosVitales | null> {
    return this.repository.findById(id);
  }
}