import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class GetPacienteSeguroByIdUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(id: string) {
    return this.pacienteRepository.findSeguroById(id);
  }
}