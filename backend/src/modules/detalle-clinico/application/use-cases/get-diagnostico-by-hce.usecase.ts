// ARCHIVO: src/modules/detalle-clinico/application/use-cases/get-diagnostico-by-hce.usecase.ts
import type { Diagnostico } from '../../domain/entities/diagnostico.entity';
import type { DiagnosticoRepository } from '../../domain/repositories/diagnostico.repository';

export class GetDiagnosticoByHceUseCase {
  constructor(private readonly diagnosticoRepository: DiagnosticoRepository) {}

  execute(idHce: string): Promise<Diagnostico[]> {
    return this.diagnosticoRepository.findByHce(idHce);
  }
}