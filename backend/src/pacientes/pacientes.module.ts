import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PacientesController],
  providers: [PacientesService, PrismaService],
})
export class PacientesModule {}
