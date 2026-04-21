// ARCHIVO: src/modules/sistema/sistema.controller.ts

import { Controller, Get } from '@nestjs/common';

@Controller('sistema')
export class SistemaController {

  @Get('logs')
  getLogs() {
    return [];
  }

}