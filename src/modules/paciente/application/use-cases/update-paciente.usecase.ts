import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class UpdatePacienteUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(id: string, data: unknown) {
    return this.pacienteRepository.update(id, data);
  }
}