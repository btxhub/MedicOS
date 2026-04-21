import { Inject } from '@nestjs/common';
import type { UsuarioRepository } from '../../domain/repositories/usuario.repository';

export class GetUsuarioByIdUseCase {
  constructor(
    @Inject('UsuarioRepository')
    private readonly repository: UsuarioRepository
  ) {}

  async execute(id: string): Promise<any> {
    return this.repository.findById(id);
  }
}