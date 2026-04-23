import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class GetPacienteByIdUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(id: string) {
    return this.pacienteRepository.findById(id);
  }
}