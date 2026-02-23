import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHceDto } from './dto/create-hce.dto';
import { CreateEvolutionDto } from './dto/create-evolution.dto';
import { UpdateEvolutionDto } from './dto/update-evolution.dto';
import { CreateAdjuntoDto } from './dto/create-adjunto.dto';

@Injectable()
export class HceService {

  constructor(private prisma: PrismaService) {}

  async create(createHceDto: CreateHceDto, doctorId: string) {

    const patient = await this.prisma.patient.findFirst({
      where: {
        id: createHceDto.patientId,
        doctorId: doctorId
      }
    });

    if (!patient) {
      throw new ForbiddenException('Acceso denegado');
    }

    const hce = await this.prisma.hCE.create({
      data: {
        doctorId: doctorId,
        patientId: createHceDto.patientId
      }
    });

    return {
      id: hce.id,
      patientId: hce.patientId,
      createdAt: hce.createdAt
    };
  }

  async createEvolution(
    hceId: string,
    dto: CreateEvolutionDto,
    doctorId: string
  ) {

    const hce = await this.prisma.hCE.findFirst({
      where: {
        id: hceId,
        doctorId: doctorId
      }
    });

    if (!hce) {
      throw new ForbiddenException('Acceso denegado');
    }

    const evolution = await this.prisma.evolution.create({
      data: {
        doctorId: doctorId,
        hceId: hceId,
        notaClinica: dto.notaClinica
      }
    });

    return {
      id: evolution.id,
      hceId: evolution.hceId,
      notaClinica: evolution.notaClinica,
      createdAt: evolution.createdAt
    };
  }

  async updateEvolution(
    evolutionId: string,
    dto: UpdateEvolutionDto,
    doctorId: string
  ) {

    const evolution = await this.prisma.evolution.findFirst({
      where: {
        id: evolutionId,
        doctorId: doctorId
      }
    });

    if (!evolution) {
      throw new ForbiddenException('Acceso denegado');
    }

    const updated = await this.prisma.evolution.update({
      where: {
        id: evolutionId
      },
      data: {
        notaClinica: dto.notaClinica
      }
    });

    return {
      id: updated.id,
      hceId: updated.hceId,
      notaClinica: updated.notaClinica,
      updatedAt: updated.updatedAt
    };
  }

  async createAdjunto(
    hceId: string,
    dto: CreateAdjuntoDto,
    doctorId: string
  ) {

    const hce = await this.prisma.hCE.findFirst({
      where: {
        id: hceId,
        doctorId: doctorId
      }
    });

    if (!hce) {
      throw new ForbiddenException('Acceso denegado');
    }

    const adjunto = await this.prisma.adjuntoClinico.create({
      data: {
        doctorId: doctorId,
        hceId: hceId,
        nombre: dto.nombre,
        tipo: dto.tipo,
        url: dto.url
      }
    });

    return {
      id: adjunto.id,
      hceId: adjunto.hceId,
      nombre: adjunto.nombre,
      tipo: adjunto.tipo,
      url: adjunto.url,
      createdAt: adjunto.createdAt
    };
  }
}