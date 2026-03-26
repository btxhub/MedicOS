// REEMPLAZAR TODO EL CONTENIDO DEL ARCHIVO
import { Injectable } from '@nestjs/common';
import { themeConfig } from '../theme.config';
import { TraduccionService } from '../i18n/traduccion.service';

@Injectable()
export class BaseComponent {
  constructor(private readonly traduccionService: TraduccionService) {}

  getColor(key: string): string {
    return themeConfig.colors[key] || '';
  }

  getTexto(clave: string, idioma: string): Promise<string> {
    return this.traduccionService.getValor(clave, idioma);
  }
}