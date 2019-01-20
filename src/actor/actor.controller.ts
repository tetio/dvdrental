import { Controller, Get, Param } from '@nestjs/common';
import { ActorService } from './actor.service'
import { Actor } from './actor.entity'

@Controller('actor')
export class ActorController {
    constructor(private readonly actorService: ActorService) { }

    @Get()
    findAll(): Promise<Actor[]> {
        return this.actorService.findAll()
    }

    @Get('/:id')
    find(@Param() param): Promise<Actor> {
        return this.actorService.find(param.id)
    }
}
