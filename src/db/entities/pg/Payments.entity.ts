import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Customers } from './Customers.entity'

@Entity()
export class Payments {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    payment_id: number

    @ManyToOne(() => Customers, Customers => Customers.payment_id)
    @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
    customer_id: Customers

    @Column()
    value: Double

    @Column()
    dueDate: Date

    @Column()
    description: string

    @Column()
    status: string

    @Column()
    encodedImage: string

    @Column()
    payload: string

    @DeleteDateColumn({ default: false })
    deleted: boolean

    @CreateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date
}
