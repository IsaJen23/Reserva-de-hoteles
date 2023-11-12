import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Comentario {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  titulo: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  contenido: string;
  
}
