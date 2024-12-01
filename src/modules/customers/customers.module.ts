import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  exports: [CustomersService], // Exporta o serviço para uso em outros módulos, se necessário
})
export class CustomersModule { }
