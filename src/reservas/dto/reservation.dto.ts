import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  num_personas: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;



  @IsNumber()
  @IsOptional()
  habitacion_id: number;

  @IsNumber()
  @IsOptional()
  usuario_id: number;

  @IsNumber()
  @IsOptional()
  serv_adicionales_id: number;

  @IsNumber()
  @IsOptional()
  comentarios_id: number;

  @IsNumber()
  @IsOptional()
  pago_id: number;


  @IsDateString()
  @IsOptional()
  fecha_entrada: string;

  @IsDateString()
  @IsOptional()
  fecha_salida: string;



}
