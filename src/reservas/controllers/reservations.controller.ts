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
import { CreateReservationDto } from '../dto/reservation.dto';
import { ReservationsService } from '../services/reservations.service';

@Controller('reservations')
export class ReservationsController {

  constructor(private readonly reservationsServices: ReservationsService) {}

  @Post()
  async create(@Body() reservationDto: CreateReservationDto) {
    return await this.reservationsServices.create(reservationDto);
  }


  @Get()
  findAll() {
    return this.reservationsServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reservationsServices.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reservationsServices.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createReservationDto: CreateReservationDto,
  ) {
    return this.reservationsServices.update(id, createReservationDto);
  }
}
