import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class GetAntecedenteByIdUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(id: string) {
    return this.pacienteRepository.findAntecedenteById(id);
  }
}