// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-diagnostico-by-id.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetDiagnosticoByIdUseCase {
  constructor(
    @Inject('DiagnosticoRepository')
    private readonly repository: any,
  ) {}

  async execute(id: string) {
    const numericId = Number(id);

    if (isNaN(numericId)) return null;

    return await this.repository.findById(numericId);
  }
}