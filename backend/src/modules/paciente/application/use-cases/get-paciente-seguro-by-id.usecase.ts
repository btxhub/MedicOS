// ARCHIVO: src/modules/paciente/application/use-cases/get-paciente-seguro-by-id.usecase.ts
import type { PacienteSeguro } from '../../domain/entities/paciente-seguro.entity';
import type { PacienteSeguroRepository } from '../../domain/repositories/paciente-seguro.repository';

export class GetPacienteSeguroByIdUseCase {
  constructor(private readonly pacienteSeguroRepository: PacienteSeguroRepository) {}

  execute(id: string): Promise<PacienteSeguro | null> {
    return this.pacienteSeguroRepository.findById(id);
  }
}