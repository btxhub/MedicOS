import { Injectable, BadRequestException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

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

  async update(id: string, doctorId: string, dto: UpdatePacienteDto) {
    if (!dto || Object.keys(dto).length === 0) {
      throw new BadRequestException('Body vacío');
    }

    const paciente = await this.prisma.patient.findUnique({
      where: { id },
    });

    if (!paciente) {
      throw new NotFoundException('Paciente no encontrado');
    }

    if (paciente.doctorId !== doctorId) {
      throw new ForbiddenException('Acceso denegado');
    }

    const actualizado = await this.prisma.patient.update({
      where: { id },
      data: dto,
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
    });

    return actualizado;
  }
}