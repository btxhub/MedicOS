// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/update-diagnostico.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { DiagnosticoRepository } from '../../domain/repositories/diagnostico.repository';

@Injectable()
export class UpdateDiagnosticoUseCase {
  constructor(
    @Inject('DiagnosticoRepository')
    private readonly repository: DiagnosticoRepository,
  ) {}

  async execute(id: string, data: any) {
    await this.repository.delete(Number(id));
    return await this.repository.create({
      idHce: Number(data.idHce),
      descripcion: data.descripcion,
    });
  }
}