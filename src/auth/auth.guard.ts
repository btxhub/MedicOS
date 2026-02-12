import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Token ausente');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token malformado');
    }

    let payload;
    try {
      payload = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
    } catch (err) {
      throw new UnauthorizedException('Token inválido o expirado');
    }

const user = await this.prisma.user.findUnique({
  where: { id: payload.sub },
  include: {
    roles: {
      include: {
        role: true,
      },
    },
  },
});


    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Usuario inactivo');
    }

    request.user = user;



    return true;
  }
}
