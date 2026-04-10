import { Module } from '@nestjs/common';
import { TraduccionService } from './traduccion.service';
import { TraduccionController } from './traduccion.controller';

@Module({
  controllers: [TraduccionController],
  providers: [TraduccionService],
  exports: [TraduccionService]
})
export class TraduccionModule {}