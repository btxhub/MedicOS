// ARCHIVO: src/modules/detalle-clinico/application/use-cases/delete-signos-vitales.usecase.ts
import type { SignosVitalesRepository } from '../../domain/repositories/signos-vitales.repository';

export class DeleteSignosVitalesUseCase {
  constructor(private readonly signosRepository: SignosVitalesRepository) {}

  execute(idSig: string): Promise<void> {
    return this.signosRepository.delete(idSig);
  }
}