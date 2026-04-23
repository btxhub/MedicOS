import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class UpdateAntecedenteUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(id: string, data: unknown) {
    return this.pacienteRepository.updateAntecedente(id, data);
  }
}