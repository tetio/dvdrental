import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { InsertResult } from 'typeorm'
import { FilmService } from './film.service'
import { Film } from './film.entity'

@Controller('film')
export class FilmController {
    constructor(private readonly filmService: FilmService) { }

    @Get()
    async findAll(): Promise<Film[]> {
        return this.filmService.findAll()
    }

    @Get('/:id')
    find(@Param() param): Promise<Film> {
        return this.filmService.find(param.id)
    }

    // @Post()
    // insert(@Body() actor: Film) {
    //     const result = this.filmService.insert(actor)
    //     return result
    // }
}