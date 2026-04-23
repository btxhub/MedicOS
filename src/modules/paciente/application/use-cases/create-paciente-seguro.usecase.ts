import { PacienteRepository } from "../../domain/repositories/paciente.repository";

export class CreatePacienteSeguroUseCase {
  constructor(private readonly pacienteRepository: PacienteRepository) {}

  async execute(data: unknown) {
    return this.pacienteRepository.createSeguro(data);
  }
}