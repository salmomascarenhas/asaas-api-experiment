import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Payer {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    customer_id: number

    @Column({ length: 100 })
    name: string

    @Column()
    cpf: string

    @Column({ nullable: true })
    email: string

    @Column({ nullable: true })
    phone: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
