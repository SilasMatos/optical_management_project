// src/modules/authentication/dto/register.dto.ts

import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEmail()
  email: string;



  // Adicione outros campos opcionais, se necessário
}
