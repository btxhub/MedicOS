import type { UsuarioRepository } from './usuario.repository';
import type { AccesoRepository } from './acceso.repository';
import type { PresentacionRepository } from './presentacion.repository';

export type UsuarioRepositoriesTypecheck = {
  usuarioRepository: UsuarioRepository;
  accesoRepository: AccesoRepository;
  presentacionRepository: PresentacionRepository;
};