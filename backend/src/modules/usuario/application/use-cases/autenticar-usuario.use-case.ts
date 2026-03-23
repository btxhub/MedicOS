import { AutenticarUsuarioCommand } from '../commands/autenticar-usuario.command';
import { AccesoUsuarioPort } from '../ports/acceso-usuario.port';
import { AccesoFactoryPort } from '../ports/acceso.factory.port';

export class AutenticarUsuarioUseCase {
  constructor(
    private readonly accesoFactory: AccesoFactoryPort,
    private readonly accesoUsuarioPort: AccesoUsuarioPort
  ) {}

  ejecutar(command: AutenticarUsuarioCommand): Promise<void> {
    const acceso = this.accesoFactory.crear(command.credenciales);
    return this.accesoUsuarioPort.ejecutar(acceso);
  }
}
