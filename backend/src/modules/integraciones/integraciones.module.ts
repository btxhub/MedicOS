import { Module } from '@nestjs/common';
import { IntegracionesController } from './integraciones.controller';

@Module({
  controllers: [IntegracionesController],
})
export class IntegracionesModule {}