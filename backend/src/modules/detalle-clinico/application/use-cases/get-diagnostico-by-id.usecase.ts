// ARCHIVO: src/modules/detalle-clinico/application/use-cases/get-diagnostico-by-id.usecase.ts
import type { Diagnostico } from '../../domain/entities/diagnostico.entity';
import type { DiagnosticoRepository } from '../../domain/repositories/diagnostico.repository';

export class GetDiagnosticoByIdUseCase {
  constructor(private readonly diagnosticoRepository: DiagnosticoRepository) {}

  execute(idDiag: string): Promise<Diagnostico | null> {
    return this.diagnosticoRepository.findById(idDiag);
  }
}