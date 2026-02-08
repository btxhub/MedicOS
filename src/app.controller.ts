import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller()
export class AppController {
  @Get('health')
  @ApiOkResponse({
    description: 'Health check del servicio',
  })
  health() {
    return {
      status: 'ok',
    };
  }
}
