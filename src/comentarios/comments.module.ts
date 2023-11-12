import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from './entities/comment.entity';
import { CommentsService } from './services/comments.service';
import { CommentsController } from './controllers/comments.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
