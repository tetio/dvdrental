import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Actor } from './actor.entity'
import { Repository, InsertResult } from 'typeorm'

@Injectable()
export class ActorService {
    constructor(
        @InjectRepository(Actor) private readonly actorRepository: Repository<Actor>
    ) { }

    async findAll(): Promise<Actor[]> {
        return await this.actorRepository.find()
    }

    async find(id: number): Promise<Actor> {
        return await this.actorRepository.findOne(id)
    }
    
    async insert(actor: Actor): Promise<InsertResult> {
        return await this.actorRepository.insert(actor)
    }
}
