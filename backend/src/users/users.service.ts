import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async findAll() {

    return this.prisma.user.findMany({
      select: {
        idUser: true,
        emailUser: true,
        createdUser: true
      }
    })

  }

  async findOne(id: string) {

    return this.prisma.user.findUnique({
      where: {
        idUser: id
      },
      select: {
        idUser: true,
        emailUser: true,
        createdUser: true
      }
    })

  }

}
