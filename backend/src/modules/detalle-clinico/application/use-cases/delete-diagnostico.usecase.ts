// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/delete-diagnostico.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { DiagnosticoRepository } from '../../domain/repositories/diagnostico.repository';

@Injectable()
export class DeleteDiagnosticoUseCase {
  constructor(
    @Inject('DiagnosticoRepository')
    private readonly repository: DiagnosticoRepository,
  ) {}

  async execute(id: string) {
    return await this.repository.delete(Number(id));
  }
}