
import { Injectable, Inject } from "@nestjs/common";
import { PacienteRepository } from "../../domain/repositories/paciente.repository";

@Injectable()
export class GetPacienteByIdUseCase {
  constructor(
    @Inject('PacienteRepository')
    private readonly pacienteRepository: PacienteRepository
  ) {}

  async execute(id: string) {
    return this.pacienteRepository.findById(id);
  }
}
