import { Controller, Get } from '@nestjs/common'

// O decorator diz ao nest que a classe a seguir servirá como
// um "controller" dentro da aplicação.
@Controller('/app')
export class AppController {
  @Get('/hi')
  getRootRoute() {
    return 'hi there';
  }

  @Get('/bye')
  getByeThere() {
    return 'see ya!';
  }
}