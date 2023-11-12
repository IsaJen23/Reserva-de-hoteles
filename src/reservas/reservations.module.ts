import { Module } from '@nestjs/common';
import {  ReservationsController } from './controllers/reservations.controller';
import {  ReservationsService } from './services/reservations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation])],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
