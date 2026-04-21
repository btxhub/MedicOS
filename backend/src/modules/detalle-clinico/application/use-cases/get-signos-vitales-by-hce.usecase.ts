import type { SignosVitalesRepository } from '../../domain/repositories/signos-vitales.repository';
import { SignosVitales } from '../../domain/entities/signos-vitales.entity';

export class GetSignosVitalesByHceUseCase {
  constructor(private readonly repository: SignosVitalesRepository) {}

  async execute(idHce: string): Promise<SignosVitales[]> {
    return this.repository.findByHce(idHce);
  }
}