import { IsString, IsNotEmpty, IsEmail, IsNumber, Min } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsNumber()
  @Min(0)
  salary: number;
}
