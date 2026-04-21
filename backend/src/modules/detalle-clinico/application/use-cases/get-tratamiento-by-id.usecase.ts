// ARCHIVO: /home/btx/MedicOS/backend/src/modules/detalle-clinico/application/use-cases/get-tratamiento-by-id.usecase.ts

import { Inject, Injectable } from '@nestjs/common';
import { TratamientoRepository } from '../../domain/repositories/tratamiento.repository';

@Injectable()
export class GetTratamientoByIdUseCase {
  constructor(
    @Inject('TratamientoRepository')
    private readonly repository: TratamientoRepository,
  ) {}

  async execute(id: string) {
    return await this.repository.findById(Number(id));
  }
}