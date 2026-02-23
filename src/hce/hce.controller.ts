import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PrismaService } from '../prisma/prisma.service';

@Controller('hce')
@UseGuards(JwtAuthGuard)
export class HceController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  async createHce(@Body() body: any, @Req() req) {
    const doctorId = req.user.id;
    const created = await this.prisma.hCE.create({
      data: {
        patientId: body.patientId,
        doctorId,
        motivoConsulta: body.motivoConsulta || '',
        antecedentes: body.antecedentes || '',
        diagnostico: body.diagnostico || [],
        tratamiento: body.tratamiento || [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return created;
  }
}