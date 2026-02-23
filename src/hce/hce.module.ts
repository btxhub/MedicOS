import { Module } from '@nestjs/common';
import { HceController } from './hce.controller';
import { EvolucionesController } from './evoluciones.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [HceController, EvolucionesController],
  providers: [PrismaService],
})
export class HceModule {}