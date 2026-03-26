import { Controller, Get, Query } from '@nestjs/common';
import { TraduccionService } from './traduccion.service';

@Controller('traducciones')
export class TraduccionController {
  constructor(private readonly traduccionService: TraduccionService) {}

  @Get()
  async getByIdioma(@Query('idioma') idioma: string) {
    return this.traduccionService.getByIdioma(idioma);
  }

  @Get('valor')
  async getValor(
    @Query('clave') clave: string,
    @Query('idioma') idioma: string
  ) {
    return this.traduccionService.getValor(clave, idioma);
  }
}