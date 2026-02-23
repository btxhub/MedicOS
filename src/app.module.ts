import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HceModule } from './hce/hce.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    HceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}