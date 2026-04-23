import { Usuario } from '../../domain/entities/usuario.entity';
import { UsuarioRepository } from '../../domain/repositories/usuario.repository';

export class CreateUsuarioUseCase {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  execute(usuario: Usuario): Promise<Usuario> {
    return this.usuarioRepository.create(usuario);
  }
}
