import { AutenticarUsuarioCommand } from '../commands/autenticar-usuario.command';
import { AccesoUsuarioPort } from '../ports/acceso-usuario.port';
import { AccesoFactoryPort } from '../ports/acceso.factory.port';
export declare class AutenticarUsuarioUseCase {
    private readonly accesoFactory;
    private readonly accesoUsuarioPort;
    constructor(accesoFactory: AccesoFactoryPort, accesoUsuarioPort: AccesoUsuarioPort);
    ejecutar(command: AutenticarUsuarioCommand): Promise<void>;
}
