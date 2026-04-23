import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class DeletePacienteSeguroUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(id: string) {
    return this.pacienteRepository.deleteSeguro(id);
  }
}