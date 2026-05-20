import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector, ModuleRef } from '@nestjs/core';
import { AccesoRepository } from '../../../modules/usuario/domain/repositories/acceso.repository';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly moduleRef: ModuleRef,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const permisosRequeridos = this.reflector.get<string[]>(
      PERMISSIONS_KEY,
      context.getHandler(),
    );

    if (!permisosRequeridos || permisosRequeridos.length === 0) return true;

    const request = context.switchToHttp().getRequest();
    const usuario = request.user;

    if (!usuario || !usuario.idUsuario) {
      throw new ForbiddenException('Usuario no válido');
    }

    const accesoRepository = this.moduleRef.get<AccesoRepository>(
      'AccesoRepository',
      { strict: false },
    );

    if (!accesoRepository) return true;

    const accesos = await accesoRepository.findByUsuarioId(
      String(usuario.idUsuario),
    );

    if (!accesos || accesos.length === 0) {
      throw new ForbiddenException('Sin permisos');
    }

    return true;
  }
}