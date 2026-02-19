import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PacientesService {
  constructor(private prisma: PrismaService) {}

  async create(doctorId: string, dto: CreatePacienteDto) {
    if (!doctorId) {
      throw new BadRequestException('Doctor inválido.');
    }

    try {
      return await this.prisma.patient.create({
        data: {
          doctorId,
          nombres: dto.nombres,
          apellidos: dto.apellidos,
          documentoIdentidad: dto.documentoIdentidad,
          fechaNacimiento: new Date(dto.fechaNacimiento),
          telefono: dto.telefono ?? null,
          email: dto.email ?? null,
          direccion: dto.direccion ?? null,
          activo: true,
        },
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
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(
          'No se pudo crear el paciente.',
        );
      }

      throw new InternalServerErrorException(
        'Error interno al crear el paciente.',
      );
    }
  }
}
