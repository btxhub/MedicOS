import { Controller, Put, Param, Body, Req, UseGuards, NotFoundException, ForbiddenException } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateEvolutionDto } from './dto/update-evolution.dto';
import { PrismaService } from '../prisma/prisma.service';

@Controller('hce/evoluciones')
@UseGuards(JwtAuthGuard)
export class EvolucionesController {
  constructor(private readonly prisma: PrismaService) {}

  @Put(':id')
  async updateEvolution(
    @Param('id') id: string,
    @Body() updateDto: UpdateEvolutionDto,
    @Req() req,
  ) {
    const doctorId = req.user.doctorId;

    const evolution = await this.prisma.evolution.findUnique({ where: { id } });
    if (!evolution) throw new NotFoundException('Evolución no encontrada');
    if (evolution.doctorId !== doctorId) throw new ForbiddenException('Acceso denegado');

    const updated = await this.prisma.evolution.update({
      where: { id },
      data: { notaClinica: updateDto.notaClinica },
    });

    const { doctorId: _, ...result } = updated;
    return result;
  }
}