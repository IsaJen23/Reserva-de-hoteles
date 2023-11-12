import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentario } from '../entities/comment.entity';
import { CreateCommentDto } from '../dto/comment.dto';

@Injectable()
export class CommentsService{
    constructor(
        @InjectRepository(Comentario)
        private commentRepo: Repository<Comentario>
    ){}

    async create(createCommentDto:CreateCommentDto){
        const comment = this.commentRepo.create(createCommentDto);
        await  this.commentRepo.save(comment);
        return comment;
    }


    findOne(id: number){
        return this.commentRepo.findOneBy({id})
    }

    
    findAll(){
        return   this.commentRepo.find({
            order: {id: 'ASC'},
        });
    }

    async remove(id:number){
        const product =await this.findOne(id);
        await this.commentRepo.remove(product);

        return 'Comentario eliminado';
    }


    async update(id: number, changes: CreateCommentDto){
        const oldComment = await this.findOne(id);
        const updateComment = await this.commentRepo.merge(oldComment, changes);
        return this.commentRepo.save(updateComment);
    }
}