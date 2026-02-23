import { Module } from '@nestjs/common';
import { HceController } from './hce.controller';
import { EvolucionesController } from './evoluciones.controller';
import { HceService } from './hce.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HceController, EvolucionesController],
  providers: [HceService],
})
export class HceModule {}