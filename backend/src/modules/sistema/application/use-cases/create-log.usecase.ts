// ARCHIVO: src/modules/sistema/application/use-cases/create-log.usecase.ts

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateLogUseCase {
  constructor(
    @Inject('LogRepository')
    private readonly repository: any,
  ) {}

  async execute(data: any) {
    const created = await this.repository.create(data);

    return {
      success: true,
      data: created,
    };
  }
}