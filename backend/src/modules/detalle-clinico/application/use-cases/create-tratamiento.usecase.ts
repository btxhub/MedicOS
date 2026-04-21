// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/create-tratamiento.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { TratamientoRepository } from '../../domain/repositories/tratamiento.repository';

@Injectable()
export class CreateTratamientoUseCase {
  constructor(
    @Inject('TratamientoRepository')
    private readonly repository: TratamientoRepository,
  ) {}

  async execute(data: any) {
    return await this.repository.create({
      idHce: Number(data.idHce),
      descripcion: data.descripcion,
    });
  }
}