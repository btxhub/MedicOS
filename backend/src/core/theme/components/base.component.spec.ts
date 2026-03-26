// REEMPLAZAR TODO EL CONTENIDO DEL ARCHIVO
import { Test, TestingModule } from '@nestjs/testing';
import { BaseComponent } from './base.component';
import { TraduccionService } from '../i18n/traduccion.service';

describe('BaseComponent', () => {
  let component: BaseComponent;
  let traduccionService: TraduccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseComponent, TraduccionService],
    }).compile();

    component = module.get<BaseComponent>(BaseComponent);
    traduccionService = module.get<TraduccionService>(TraduccionService);
  });

  it('debe retornar color definido', () => {
    expect(component.getColor('primary')).toBeDefined();
  });

  it('debe retornar texto según idioma', async () => {
    const valor = await component.getTexto('home.title', 'es');
    expect(valor).toBeDefined();
  });
});