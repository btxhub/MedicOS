// ARCHIVO: backend/src/modules/hce/application/use-cases/create-hce.usecase.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateHceUseCase {
  async execute(data: any) {
    return { message: 'ok', data };
  }
}