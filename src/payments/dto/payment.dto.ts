import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  monto: string;

  @IsString()
  @IsNotEmpty()
  metodo_pago: string;

  @IsNumber()
  @IsOptional()
  reserva_id: number;


}
