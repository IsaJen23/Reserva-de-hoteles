import { Injectable } from '@nestjs/common';
import { Reservation } from '../entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDto } from '../dto/reservation.dto';

@Injectable()
export class ReservationsService{
    constructor(
        @InjectRepository(Reservation)
        private reservationRepo: Repository<Reservation>,
    ){}      
      
    

  
    async create(createReservationDto:CreateReservationDto){
        const reservation = this.reservationRepo.create(createReservationDto);
        await  this.reservationRepo.save(reservation);
        return reservation;
    }

    

    findOne(id: number){
        return this.reservationRepo.findOne({
            where: {id},
            relations: {
                habitacion: true,
                user: true,
                comentario: true,
                pago: true,
                servicios_adicionales: true,
            }
        });
        
    }

    
    findAll(){
        return   this.reservationRepo.find({
            order: {id: 'ASC'},
            relations: {
                habitacion: true,
                user: true,
                comentario: true,
                pago: true,
                servicios_adicionales: true,
            },
        });
    }
    

    async remove(id:number){
        const reservation =await this.findOne(id);
        await this.reservationRepo.remove(reservation);
        return 'Reserva eliminada';
    }

   

    async update(id: number, changes: CreateReservationDto){
        const oldReservation = await this.findOne(id);
        const updateReservation = await this.reservationRepo.merge(oldReservation, changes);
        return this.reservationRepo.save(updateReservation);
    }
}