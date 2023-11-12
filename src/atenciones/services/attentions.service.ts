import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttentionDto } from '../dto/attention.dto';
import { Attention } from '../entities/attention.entity';

@Injectable()
export class AttentionsService{
    constructor(
        @InjectRepository(Attention)
        private attentionRepo: Repository<Attention>
    ){}

    async create(createAttentionDto:CreateAttentionDto){
        const attention = this.attentionRepo.create(createAttentionDto);
        await  this.attentionRepo.save(attention);
        return attention;
    }


    findOne(id: number){
        return this.attentionRepo.findOneBy({id})
    }

    
    findAll(){
        return   this.attentionRepo.find({
            order: {id: 'ASC'},
        });
    }

    async remove(id:number){
        const product =await this.findOne(id);
        await this.attentionRepo.remove(product);

        return 'Atencion extra eliminada';
    }


    async update(id: number, changes: CreateAttentionDto){
        const oldAttention = await this.findOne(id);
        const updateAttention = await this.attentionRepo.merge(oldAttention, changes);
        return this.attentionRepo.save(updateAttention);
    }
}