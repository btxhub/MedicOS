import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class DeleteAntecedenteUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(id: string) {
    return this.pacienteRepository.deleteAntecedente(id);
  }
}