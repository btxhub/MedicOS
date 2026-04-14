import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class CreateAntecedenteUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(data: unknown) {
    return this.pacienteRepository.createAntecedente(data);
  }
}