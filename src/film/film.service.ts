import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Film } from './film.entity'
import { Repository } from 'typeorm'

@Injectable()
export class FilmService {

    constructor(
        @InjectRepository(Film) private readonly filmRepository: Repository<Film>
    ) {}

    async findAll(): Promise<Film[]> {
        return await this.filmRepository.find()
    }

    async find(id: number): Promise<Film> {
        const res = await this.filmRepository.createQueryBuilder('film')
        .where(`film.film_id = ${id}`)
        .leftJoinAndSelect("film.actors", "actor")
        .getOne()
        return res
    }
}
