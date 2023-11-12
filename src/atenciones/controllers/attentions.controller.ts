import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AttentionsService } from '../services/attentions.service';
import { CreateAttentionDto } from '../dto/attention.dto';




@Controller('attentions')
export class AttentionsController {
  constructor(private readonly attentionsService: AttentionsService) {}

  @Post()
  create(@Body() createAttentionDto: CreateAttentionDto) {
    return this.attentionsService.create(createAttentionDto);
  }

  @Get()
  findAll() {
    return this.attentionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe)id: number) {
    return this.attentionsService.findOne(id);
  }

 
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe)id: number,
    @Body()createAttentionDto :CreateAttentionDto,
        
  )
  {
    return this.attentionsService.update(id, createAttentionDto)
  }


  @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
    return this.attentionsService.remove(id);
  }

  
}
