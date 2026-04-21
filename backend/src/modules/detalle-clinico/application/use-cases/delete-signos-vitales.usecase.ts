import { Inject, Injectable } from '@nestjs/common';
import { SignosVitalesRepository } from '../../domain/repositories/signos-vitales.repository';

@Injectable()
export class DeleteSignosVitalesUseCase {
  constructor(
    @Inject('SignosVitalesRepository')
    private readonly repository: SignosVitalesRepository,
  ) {}

  async execute(id: string) {
    return this.repository.delete(id);
  }
}