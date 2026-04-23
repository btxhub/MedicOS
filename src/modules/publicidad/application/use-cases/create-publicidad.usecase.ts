import { Inject } from '@nestjs/common';
import type { PublicidadRepository } from '../../domain/repositories/publicidad.repository';

export class CreatePublicidadUseCase {
  constructor(
    @Inject('PublicidadRepository')
    private readonly repository: PublicidadRepository,
  ) {}

  async execute(data: any): Promise<any> {
    return this.repository.save(data);
  }
}