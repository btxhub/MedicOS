import { RegistrarUsuarioCommand } from '../commands/registrar-usuario.command';
import { RegistroUsuarioPort } from '../ports/registro-usuario.port';
import { UsuarioFactoryPort } from '../ports/usuario.factory.port';

export class RegistrarUsuarioUseCase {
  constructor(
    private readonly usuarioFactory: UsuarioFactoryPort,
    private readonly registroUsuarioPort: RegistroUsuarioPort
  ) {}

  ejecutar(command: RegistrarUsuarioCommand): Promise<void> {
    const usuario = this.usuarioFactory.crear(command.usuario);
    return this.registroUsuarioPort.ejecutar(usuario);
  }
}
