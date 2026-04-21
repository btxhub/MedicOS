// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-diagnostico-by-hce.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { DiagnosticoRepository } from '../../domain/repositories/diagnostico.repository';

@Injectable()
export class GetDiagnosticoByHceUseCase {
  constructor(
    @Inject('DiagnosticoRepository')
    private readonly repository: DiagnosticoRepository,
  ) {}

  async execute(idHce: string) {
    return await this.repository.findByHce(Number(idHce));
  }
}