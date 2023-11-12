
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoomImage } from './room-image.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  tipo: string;

  @Column({ type: 'int4',  nullable: false })
  precio_noche: number;

  @Column({ type: 'varchar',  nullable: true })
  filename: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  descripcion: string;

  @Column({ type: 'int4', nullable: true })
  capacidad: number;
  

  @OneToMany(() => RoomImage, (roomImage) => roomImage.room, {
    cascade: true,
  })
  images?: RoomImage[];
}
