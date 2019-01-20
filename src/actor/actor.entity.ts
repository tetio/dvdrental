import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity('actor')
export class Actor {
    @PrimaryColumn()
    actor_id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    last_update: string
}