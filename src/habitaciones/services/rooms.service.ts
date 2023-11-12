import { Injectable } from '@nestjs/common';
import { Room } from '../entities/room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateRoomDto } from '../dto/room.dto';
import { RoomImage } from '../entities/room-image.entity';

@Injectable()
export class RoomsService{
    constructor(
        @InjectRepository(Room)
        private roomRepo: Repository<Room>,

        @InjectRepository(RoomImage)
        private readonly roomImageRepo: Repository<RoomImage>,

        private readonly dataSource: DataSource,
    ){}      
      
    

    async create(createRoomDto: CreateRoomDto){
        const { images = [], ...detailsRoom } = createRoomDto;

        const room = await this.roomRepo.create({
            ...detailsRoom,
            images: images.map((image) => this.roomImageRepo.create({ url: image }),
            ),
        });
        await this.roomRepo.save(room);
        return room;
    }

    
    findOne(id: number){
        return this.roomRepo.findOne({
            where: {id},
            relations: {
                images: true,
            }
        });
        
    }
    
    findAll(){
        return   this.roomRepo.find({
            order: {id: 'ASC'},
            relations: {
                images: true,
            },
        });
    }
    

    async remove(id:number){
        const room =await this.findOne(id);
        await this.roomRepo.remove(room);
        return 'Habitacion eliminada';
    }

    
    async update(id: number, cambios: CreateRoomDto){
        const {images, ...updateAll } = cambios;
        const room = await this.roomRepo.preload({
            id: id,
            ...updateAll,
        });
        //correr el queryRunner

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        if(images) {
            await queryRunner.manager.delete(RoomImage, {room: { id }});
            
            //creamos nuevas imagenes
            room.images = images.map((image) =>
            this.roomImageRepo.create({ url: image }),
            );
        } else {
            room.images = await this.roomImageRepo.findBy({ room: { id }});
        }
    
        await queryRunner.manager.save(room);
        await queryRunner.commitTransaction();
        await queryRunner.release();
        return room;
    }
}