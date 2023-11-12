import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CommentsService } from '../services/comments.service';
import { CreateCommentDto } from '../dto/comment.dto';



@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe)id: number) {
    return this.commentsService.findOne(id);
  }

 
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe)id: number,
    @Body()createCommentDto :CreateCommentDto,
        
  )
  {
    return this.commentsService.update(id, createCommentDto)
  }


  @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
    return this.commentsService.remove(id);
  }

  
}
