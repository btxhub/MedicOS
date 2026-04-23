import { Usuario } from '../../domain/entities';

export interface UsuarioFactoryPort {
  crear(data: any): Usuario;
}
