// ARCHIVO: /home/btx/MedicOS/backend/src/core/security/guards/rate-limit.guard.ts

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  BadRequestException,
} from '@nestjs/common';

const requests: Record<string, { count: number; time: number }> = {};

@Injectable()
export class RateLimitGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const ip = request.ip || 'unknown';

    const now = Date.now();

    if (!requests[ip]) {
      requests[ip] = { count: 1, time: now };
      return true;
    }

    const diff = now - requests[ip].time;

    if (diff > 60000) {
      requests[ip] = { count: 1, time: now };
      return true;
    }

    requests[ip].count++;

    if (requests[ip].count > 10) {
      throw new BadRequestException('RATE_LIMIT');
    }

    return true;
  }
}