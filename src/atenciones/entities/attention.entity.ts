import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Attention {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar',  nullable: false })
  nombre: string;

  @Column({ type: 'int4', nullable: false })
  costo_adicional: number;

  @Column({ type: 'int4', nullable: true })
  reserva_id: number;
  
}
