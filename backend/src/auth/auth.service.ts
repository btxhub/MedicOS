import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {

    const passHash = await bcrypt.hash(password, 10)

    const user = await this.prisma.user.create({
      data: {
        emailUser: email,
        passHashUser: passHash,
        activoUser: true
      }
    })

    return {
      id: user.idUser,
      email: user.emailUser,
      createdAt: user.createdUser
    }

  }

  async login(email: string, password: string) {

    const user = await this.prisma.user.findUnique({
      where: {
        emailUser: email
      }
    })

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas')
    }

    const passwordValid = await bcrypt.compare(password, user.passHashUser)

    if (!passwordValid) {
      throw new UnauthorizedException('Credenciales inválidas')
    }

    const payload = {
      sub: user.idUser,
      email: user.emailUser
    }

    return {
      access_token: this.jwtService.sign(payload)
    }

  }

}
