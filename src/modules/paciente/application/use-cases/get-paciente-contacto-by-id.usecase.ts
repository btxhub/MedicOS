import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class GetPacienteContactoByIdUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(id: string) {
    return this.pacienteRepository.findContactoById(id);
  }
}