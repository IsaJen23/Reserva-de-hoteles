import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Payment {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar',  nullable: false })
  monto: string;

  @Column({ type: 'varchar', nullable: false })
  metodo_pago: string;

  @Column({ type: 'int4', nullable: true })
  reserva_id: number;
  
}
