import { Module } from '@nestjs/common';
import { TraduccionService } from './traduccion.service';
import { TraduccionController } from './traduccion.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TraduccionController],
  providers: [TraduccionService],
  exports: [TraduccionService]
})
export class TraduccionModule {}