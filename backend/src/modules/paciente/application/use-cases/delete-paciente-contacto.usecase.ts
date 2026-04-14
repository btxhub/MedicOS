import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class DeletePacienteContactoUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(id: string) {
    return this.pacienteRepository.deleteContacto(id);
  }
}