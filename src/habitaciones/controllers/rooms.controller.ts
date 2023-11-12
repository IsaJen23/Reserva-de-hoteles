import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { RoomsService } from '../services/rooms.service';
import { CreateRoomDto } from '../dto/room.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsServices: RoomsService) {}

  @Post()
  async create(@Body() createRoomDto: CreateRoomDto) {
    return await this.roomsServices.create(createRoomDto);
  }


  @Get()
  findAll() {
    return this.roomsServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.roomsServices.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.roomsServices.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createRoomDto: CreateRoomDto,
  ) {
    return this.roomsServices.update(id, createRoomDto);
  }
}
