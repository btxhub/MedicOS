import { Module } from '@nestjs/common';
import { HceController } from './hce.controller';
import { HceService } from './hce.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
  ],
  controllers: [HceController],
  providers: [HceService],
})
export class HceModule {}