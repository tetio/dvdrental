import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorModule } from './actor/actor.module';
import { FilmModule } from './film/film.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ActorModule, FilmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
