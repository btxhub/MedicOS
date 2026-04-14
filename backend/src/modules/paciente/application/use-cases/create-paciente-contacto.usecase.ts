import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class CreatePacienteContactoUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(data: unknown) {
    return this.pacienteRepository.createContacto(data);
  }
}