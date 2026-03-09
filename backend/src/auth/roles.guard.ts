import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { PrismaService } from "../prisma/prisma.service";
import { ROLES_KEY } from "./roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user as { sub: string; email: string };

    const userRoles = await this.prisma.userRole.findMany({
      where: { userId: user.sub },
      include: { role: true },
    });

    const roles = userRoles.map((ur) => ur.role.name);

    const hasRole = requiredRoles.some((role) => roles.includes(role));

    if (!hasRole) {
      throw new ForbiddenException("Access denied");
    }

    return true;
  }
}
