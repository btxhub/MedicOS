import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class UpdatePacienteContactoUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(id: string, data: unknown) {
    return this.pacienteRepository.updateContacto(id, data);
  }
}