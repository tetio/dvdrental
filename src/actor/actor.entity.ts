import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Film } from "../film/film.entity";

@Entity('actor')
export class Actor {
    @PrimaryGeneratedColumn()
    actor_id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    last_update: string

}