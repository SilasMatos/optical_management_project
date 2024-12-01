import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @Min(1)
  customerId: number;

  @IsString()
  @IsNotEmpty()
  productIds: string; // Lista de IDs de produtos separados por vírgula

  @IsNumber()
  @Min(0)
  totalPrice: number;
}
