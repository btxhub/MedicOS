import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class DeletePacienteUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(id: string) {
    return this.pacienteRepository.delete(id);
  }
}