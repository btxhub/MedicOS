import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';

@Injectable()
export class PacientesService {
  constructor(private prisma: PrismaService) {}

  async create(doctorId: string, dto: CreatePacienteDto) {
    return this.prisma.patient.create({
      data: {
        ...dto,
        doctorId,
      },
    });
  }

  async findAll(doctorId: string, page: number, limit: number) {
    const skip = (page - 1) * limit;
    const take = limit;

    const [data, total] = await Promise.all([
      this.prisma.patient.findMany({
        where: { doctorId },
        orderBy: { createdAt: 'desc' },
        skip,
        take,
        select: {
          id: true,
          nombres: true,
          apellidos: true,
          documentoIdentidad: true,
          fechaNacimiento: true,
          telefono: true,
          email: true,
          direccion: true,
          activo: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      this.prisma.patient.count({
        where: { doctorId },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages,
      },
    };
  }
}
