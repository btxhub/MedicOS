import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        idUser: true,
        emailUser: true,
        activoUser: true,
        refDocUser: true,
        refAsisUser: true,
        createdUser: true,
      },
    });
  }

  async findById(idUser: string) {
    const user = await this.prisma.user.findUnique({
      where: { idUser },
      select: {
        idUser: true,
        emailUser: true,
        activoUser: true,
        refDocUser: true,
        refAsisUser: true,
        createdUser: true,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return user;
  }
}
