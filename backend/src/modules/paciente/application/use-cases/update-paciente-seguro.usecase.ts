// ARCHIVO: src/modules/paciente/application/use-cases/update-paciente-seguro.usecase.ts
import type { PacienteSeguro } from '../../domain/entities/paciente-seguro.entity';
import type { PacienteSeguroRepository } from '../../domain/repositories/paciente-seguro.repository';

export class UpdatePacienteSeguroUseCase {
  constructor(private readonly pacienteSeguroRepository: PacienteSeguroRepository) {}

  update(entity: PacienteSeguro): Promise<PacienteSeguro> {
    return this.pacienteSeguroRepository.update(entity);
  }
}