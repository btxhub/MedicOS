// ARCHIVO: /home/btx/MedicOS/backend/src/core/security/guards/token-revocation.guard.ts

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

const revokedTokens = new Set<string>();

@Injectable()
export class TokenRevocationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return true;
    }

    const token = authHeader.substring(7).trim();

    if (revokedTokens.has(token)) {
      throw new UnauthorizedException('TOKEN_REVOKED');
    }

    return true;
  }

  static revoke(token: string) {
    revokedTokens.add(token);
  }
}