// ARCHIVO: src/modules/detalle-clinico/application/use-cases/create-diagnostico.usecase.ts
import type { Diagnostico } from '../../domain/entities/diagnostico.entity';
import type { DiagnosticoRepository } from '../../domain/repositories/diagnostico.repository';

export class CreateDiagnosticoUseCase {
  constructor(private readonly diagnosticoRepository: DiagnosticoRepository) {}

  execute(diagnostico: Diagnostico): Promise<Diagnostico> {
    return this.diagnosticoRepository.save(diagnostico);
  }
}