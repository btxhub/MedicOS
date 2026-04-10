// ARCHIVO: src/core/theme/components/base.component.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseComponent {
  getColor(key: string): string {
    return '';
  }

  async getTexto(clave: string, idioma: string): Promise<string> {
    return '';
  }
}