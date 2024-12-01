// src/app.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcomeMessage(): string {
    return 'Bem-vindo ao Sistema de Gerenciamento de Ótica!';
  }
}
