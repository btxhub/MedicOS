import { Usuario } from '../../domain/entities';
export interface RegistroUsuarioPort {
    ejecutar(usuario: Usuario): Promise<void>;
}
