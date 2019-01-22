import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm"
import { Actor } from "../actor/actor.entity";

@Entity('film')
export class Film {
    @PrimaryGeneratedColumn()
    film_id: number

    @Column()
    title: string

    @Column()
    description: string
    
    @Column()
    release_year: number
    
    @Column()
    language_id: number

    @Column()
    rental_duration: number

    @Column()
    rental_rate: number

    @Column()
    length: number

    @Column()
    replacement_cost: number

    @Column()
    rating: string

    @Column()
    last_update: Date
    
    // @Column()
    // special_features: string[]
    
        // @Column({'type': 'tsvector'})
        // full_text: string[]

    @ManyToMany(type => Actor)
    @JoinTable({name: 'film_actor', joinColumn: {name:'film_id'}, inverseJoinColumn: {name: 'actor_id'}})
    actors: Actor[]
    
}