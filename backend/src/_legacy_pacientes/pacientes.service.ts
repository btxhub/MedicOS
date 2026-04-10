import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacientesService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreatePacienteDto, refDocPac: string) {
    return this.prisma.paciente.create({
      data: {
        ...data,
        refDocPac,
      },
    });
  }

  findAll(refDocPac: string) {
    return this.prisma.paciente.findMany({
      where: {
        refDocPac,
      },
      orderBy: {
        createdPac: 'desc',
      },
    });
  }

  findOne(idPac: string, refDocPac: string) {
    return this.prisma.paciente.findFirst({
      where: {
        idPac,
        refDocPac,
      },
    });
  }

  update(idPac: string, data: UpdatePacienteDto, refDocPac: string) {
    return this.prisma.paciente.update({
      where: {
        idPac,
      },
      data,
    });
  }

  remove(idPac: string, refDocPac: string) {
    return this.prisma.paciente.delete({
      where: {
        idPac,
      },
    });
  }

}
