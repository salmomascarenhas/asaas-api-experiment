import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Customers {
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

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date
}
