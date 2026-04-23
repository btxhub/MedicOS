import { Inject } from '@nestjs/common';
import type { UsuarioRepository } from '../../domain/repositories/usuario.repository';

export class RegistrarUsuarioUseCase {
  constructor(
    @Inject('UsuarioRepository')
    private readonly repository: UsuarioRepository
  ) {}

  async execute(data: any): Promise<any> {
    return this.repository.create(data);
  }
}