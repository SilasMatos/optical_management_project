import { IsString, IsNotEmpty, IsNumber, Min, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @Transform(({ value }) => parseFloat(value)) // Converte string para número
  @IsNumber()
  @Min(0)
  price: number;

  @Transform(({ value }) => parseInt(value, 10)) // Converte string para número inteiro
  @IsNumber()
  @Min(0)
  stock: number;

  @IsOptional() // Campo opcional
  image?: string; // Caminho da imagem
}
