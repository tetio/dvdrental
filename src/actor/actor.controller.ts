import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ActorService } from './actor.service'
import { Actor } from './actor.entity'


import { InsertResult } from 'typeorm'

@Controller('actor')
export class ActorController {
    constructor(private readonly actorService: ActorService) { }

    @Get()
    async findAll(): Promise<Actor[]> {
        return this.actorService.findAll()
    }

    @Get('/:id')
    find(@Param() param): Promise<Actor> {
        return this.actorService.find(param.id)
    }

    @Post()
    insert(@Body() actor: Actor) {
        const result = this.actorService.insert(actor)
        return result
    }
}
