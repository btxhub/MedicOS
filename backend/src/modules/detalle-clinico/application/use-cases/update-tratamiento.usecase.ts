// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/update-tratamiento.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { TratamientoRepository } from '../../domain/repositories/tratamiento.repository';

@Injectable()
export class UpdateTratamientoUseCase {
  constructor(
    @Inject('TratamientoRepository')
    private readonly repository: TratamientoRepository,
  ) {}

  async execute(id: string, data: any) {
    await this.repository.delete(Number(id));
    return await this.repository.create({
      idHce: Number(data.idHce),
      descripcion: data.descripcion,
    });
  }
}