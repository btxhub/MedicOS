// ARCHIVO: src/modules/paciente/application/use-cases/get-all-pacientes.usecase.ts
import type { Paciente } from '../../domain/entities/paciente.entity';
import type { PacienteRepository } from '../../domain/repositories/paciente.repository';

export class GetAllPacientesUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  execute(): Promise<Paciente[]> {
    return this.pacienteRepository.findAll();
  }
}