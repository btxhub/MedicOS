// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/create-tratamiento.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateTratamientoUseCase {
  constructor(
    @Inject('TratamientoRepository')
    private readonly repository: any,
  ) {}

  async execute(data: any) {
    return this.repository.create({
      idHce: Number(data.idHce),
      descripcion: data.descripcion,
    });
  }
}