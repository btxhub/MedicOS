// ARCHIVO: backend/src/modules/hce/hce.module.ts

import { Module } from '@nestjs/common';
import { HceController } from './infrastructure/hce.controller';

import {
  GetAllHceUseCase,
  GetHceByIdUseCase,
  CreateHceUseCase,
} from './application/use-cases';

@Module({
  controllers: [HceController],
  providers: [
    GetAllHceUseCase,
    GetHceByIdUseCase,
    CreateHceUseCase,
  ],
})
export class HceModule {}