import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class CreatePacienteUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(data: unknown) {
    return this.pacienteRepository.create(data);
  }
}