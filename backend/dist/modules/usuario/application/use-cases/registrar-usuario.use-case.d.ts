import { RegistrarUsuarioCommand } from '../commands/registrar-usuario.command';
import { RegistroUsuarioPort } from '../ports/registro-usuario.port';
import { UsuarioFactoryPort } from '../ports/usuario.factory.port';
export declare class RegistrarUsuarioUseCase {
    private readonly usuarioFactory;
    private readonly registroUsuarioPort;
    constructor(usuarioFactory: UsuarioFactoryPort, registroUsuarioPort: RegistroUsuarioPort);
    ejecutar(command: RegistrarUsuarioCommand): Promise<void>;
}
