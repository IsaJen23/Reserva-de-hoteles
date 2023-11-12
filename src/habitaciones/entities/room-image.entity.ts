import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from './room.entity';



@Entity()
export class RoomImage{
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Column({ type: 'varchar',  nullable: true })
    url: string;

    @ManyToOne(() => Room, (room) => room.images, {
        onDelete: 'CASCADE',
    })
    room: Room;   
    
}