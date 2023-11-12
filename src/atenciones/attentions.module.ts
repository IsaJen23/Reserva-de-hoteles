import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attention } from './entities/attention.entity';
import { AttentionsService } from './services/attentions.service';
import { AttentionsController } from './controllers/attentions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Attention])],
  controllers: [AttentionsController],
  providers: [AttentionsService],
})
export class AttentionsModule {}
