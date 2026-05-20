// ARCHIVO: src/core/i18n/traduccion.controller.ts

import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../security/guards/auth.guard';

@Controller('traducciones')
@UseGuards(AuthGuard)
export class TraduccionController {

  @Get('valor')
  getValor(@Query('clave') clave: string, @Query('idioma') idioma: string) {
    return { clave, idioma };
  }
}