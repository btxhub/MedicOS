// ARCHIVO: src/modules/detalle-clinico/application/use-cases/update-diagnostico.usecase.ts
import type { Diagnostico } from '../../domain/entities/diagnostico.entity';
import type { DiagnosticoRepository } from '../../domain/repositories/diagnostico.repository';

export class UpdateDiagnosticoUseCase {
  constructor(private readonly diagnosticoRepository: DiagnosticoRepository) {}

  execute(diagnostico: Diagnostico): Promise<Diagnostico> {
    return this.diagnosticoRepository.update(diagnostico);
  }
}