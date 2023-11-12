import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomImage } from './entities/room-image.entity';
import { Room } from './entities/room.entity';
import { RoomsController } from './controllers/rooms.controller';
import { RoomsService } from './services/rooms.service';

@Module({
  imports: [TypeOrmModule.forFeature([Room, RoomImage])],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
