import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Payments } from './Payments.entity'

@Entity()
export class Customers {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    customer_id: number

    @Column({ length: 100 })
    name: string

    @Column({ unique: true })
    cpf: string

    @Column({ nullable: true })
    email: string

    @Column({ nullable: true })
    phone: string

    @OneToMany(() => Payments, (Payments) => Payments.customer_id)
    payment_id: Payments[]

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date
}
