import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  titulo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  contenido: string;

  


}
