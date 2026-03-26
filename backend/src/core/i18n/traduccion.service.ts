import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TraduccionService {
  constructor(private readonly prisma: PrismaService) {}

  async getByIdioma(idioma: string) {
    return this.prisma.$queryRawUnsafe(
      'SELECT clave, valor FROM traduccion WHERE idioma = $1',
      idioma
    );
  }

  async getValor(clave: string, idioma: string) {
    const result: any = await this.prisma.$queryRawUnsafe(
      'SELECT valor FROM traduccion WHERE clave = $1 AND idioma = $2 LIMIT 1',
      clave,
      idioma
    );

    return result[0]?.valor || null;
  }
}