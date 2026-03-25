// ARCHIVO: src/modules/detalle-clinico/application/use-cases/delete-diagnostico.usecase.ts
import type { DiagnosticoRepository } from '../../domain/repositories/diagnostico.repository';

export class DeleteDiagnosticoUseCase {
  constructor(private readonly diagnosticoRepository: DiagnosticoRepository) {}

  execute(idDiag: string): Promise<void> {
    return this.diagnosticoRepository.delete(idDiag);
  }
}