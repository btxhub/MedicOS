// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-diagnostico-by-id.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { DiagnosticoRepository } from '../../domain/repositories/diagnostico.repository';

@Injectable()
export class GetDiagnosticoByIdUseCase {
  constructor(
    @Inject('DiagnosticoRepository')
    private readonly repository: DiagnosticoRepository,
  ) {}

  async execute(id: string) {
    return await this.repository.findById(Number(id));
  }
}