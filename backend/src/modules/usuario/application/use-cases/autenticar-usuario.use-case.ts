import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import type { UsuarioRepository } from '../../domain/repositories/usuario.repository';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AutenticarUsuarioUseCase {
  constructor(
    @Inject('UsuarioRepository')
    private readonly usuarioRepository: UsuarioRepository,
  ) {}

  async execute(email: string, password: string) {
    const usuario = await this.usuarioRepository.findByEmail(email);

    if (!usuario) {
      throw new UnauthorizedException('LOGIN_FAIL');
    }

    if (usuario.password !== password) {
      throw new UnauthorizedException('LOGIN_FAIL');
    }

    const token = jwt.sign(
      { idUsuario: usuario.id },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' },
    );

    return {
      token,
      idUsuario: usuario.id,
      email: usuario.email,
    };
  }
}