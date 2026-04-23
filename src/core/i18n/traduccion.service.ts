import { Injectable } from '@nestjs/common';

@Injectable()
export class TraduccionService {

  async getByIdioma(idioma: string) {
    return [];
  }

  async getValor(clave: string, idioma: string) {
    return null;
  }

}