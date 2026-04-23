import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class UpdatePacienteSeguroUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(id: string, data: unknown) {
    return this.pacienteRepository.updateSeguro(id, data);
  }
}