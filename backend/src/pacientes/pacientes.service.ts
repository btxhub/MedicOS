import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PacientesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.paciente.create({ data });
  }

  findAll() {
    return this.prisma.paciente.findMany();
  }

  findOne(id: string) {
    return this.prisma.paciente.findUnique({ where: { idPac: id } });
  }

  update(id: string, data: any) {
    return this.prisma.paciente.update({ where: { idPac: id }, data });
  }

  remove(id: string) {
    return this.prisma.paciente.delete({ where: { idPac: id } });
  }
}
