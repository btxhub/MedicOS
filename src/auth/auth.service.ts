import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(doctorId: string, email: string, password: string) {
    console.log("DEBUG LOGIN CALLED:", { doctorId, email });
    let user;
    try {
      user = await this.prisma.user.findUnique({
        where: {
          doctorId_email: {
            doctorId,
            email,
          },
        },
        include: {
          roles: {
            include: {
              role: true,
            },
          },
        },
      });
    } catch (error) {
      console.error("DEBUG PRISMA ERROR:", error);
      throw error;
    }

    if (!user || !user.isActive) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = {
      sub: user.id,
      doctorId: user.doctorId,
      email: user.email,
      roles: user.roles.map(ur => ur.role.key),
    };

    return {
      access_token: this.jwtService.sign(payload),
      token_type: 'Bearer',
      expires_in: 3600,
    };
  }
}