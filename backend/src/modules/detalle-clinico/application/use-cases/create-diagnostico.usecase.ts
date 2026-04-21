// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/create-diagnostico.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { DiagnosticoRepository } from '../../domain/repositories/diagnostico.repository';

@Injectable()
export class CreateDiagnosticoUseCase {
  constructor(
    @Inject('DiagnosticoRepository')
    private readonly repository: DiagnosticoRepository,
  ) {}

  async execute(data: any) {
    return await this.repository.create({
      idHce: Number(data.idHce),
      descripcion: data.descripcion,
    });
  }
}