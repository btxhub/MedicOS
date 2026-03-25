// ARCHIVO: src/modules/paciente/application/use-cases/get-paciente-by-id.usecase.ts
import type { Paciente } from '../../domain/entities/paciente.entity';
import type { PacienteRepository } from '../../domain/repositories/paciente.repository';

export class GetPacienteByIdUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  execute(id: string): Promise<Paciente | null> {
    return this.pacienteRepository.findById(id);
  }
}