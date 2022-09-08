import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Payments } from '../pg/Payments.entity'

@Entity()
export class Notifications {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @ManyToOne(() => Payments, Payments => Payments.notification_id)
    @JoinColumn({ name: 'payment_id', referencedColumnName: 'id' })
    payment_id: Payments

    @Column()
    description: string

    @Column({ default: false })
    read: boolean

    @CreateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date
}
