import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorModule } from './actor/actor.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ActorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
