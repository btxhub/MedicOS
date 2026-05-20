// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/create-diagnostico.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateDiagnosticoUseCase {
  constructor(
    @Inject('DiagnosticoRepository')
    private readonly repository: any,
  ) {}

  async execute(data: any) {
    return this.repository.create({
      idHce: data.idHce,
      descripcion: data.descripcion,
    });
  }
}