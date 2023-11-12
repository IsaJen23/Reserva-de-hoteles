import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  tipo: string;


  @IsNumber()
  @IsNotEmpty()
  precio_noche: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  capacidad: number;

  @IsArray({ each: true })
  @IsString()
  @IsOptional()
  images?: string[];

}
