
import { Attention } from 'src/atenciones/entities/attention.entity';
import { Comentario } from 'src/comentarios/entities/comment.entity';
import { Room } from 'src/habitaciones/entities/room.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  num_personas: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'timestamp' })
  fecha_entrada: Date;

  @Column({ type: 'timestamp' })
  fecha_salida: Date;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'int4', nullable: false })
  habitacion_id: number;

  @Column({ type: 'int4', nullable: false })
  usuario_id: number;

  @Column({ type: 'int4', nullable: true })
  pago_id: number;

  @Column({type: 'int4', nullable: false})
  serv_adicionales_id: number;

  @Column({type: 'int4', nullable: false})
  comentario_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ 
    name: 'usuario_id',
    referencedColumnName: 'id'
   })
  user: User;

  @ManyToOne(() => Room)
  @JoinColumn({ 
    name: 'habitacion_id',
    referencedColumnName: 'id'
   })
  habitacion: Room;

  @ManyToOne(() => Comentario)
  @JoinColumn({ 
    name: 'comentario_id',
    referencedColumnName: 'id'
   })
  comentario: Comentario;

  @ManyToOne(() => Payment)
  @JoinColumn({ 
    name: 'pago_id',
    referencedColumnName: 'id'
   })
  pago: Payment;

  @ManyToOne(() => Attention)
  @JoinColumn({ 
    name: 'serv_adicionales_id',
    referencedColumnName: 'id'
   })
  servicios_adicionales: Attention;
}
