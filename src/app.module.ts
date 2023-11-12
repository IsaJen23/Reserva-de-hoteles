import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { RoomsModule } from './habitaciones/rooms.module';
import { ReservationsModule } from './reservas/reservations.module';
import { CommentsModule } from './comentarios/comments.module';
import { PaymentsModule } from './payments/payments.module';
import { AttentionsModule } from './atenciones/attentions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'hotel',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    RoomsModule,
    ReservationsModule,
    CommentsModule,
    PaymentsModule,
    AttentionsModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
