// ARCHIVO: src/modules/paciente/application/use-cases/create-paciente-seguro.usecase.ts
import type { PacienteSeguro } from '../../domain/entities/paciente-seguro.entity';
import type { PacienteSeguroRepository } from '../../domain/repositories/paciente-seguro.repository';

export class CreatePacienteSeguroUseCase {
  constructor(private readonly pacienteSeguroRepository: PacienteSeguroRepository) {}

  create(entity: PacienteSeguro): Promise<PacienteSeguro> {
    return this.pacienteSeguroRepository.save(entity);
  }
}