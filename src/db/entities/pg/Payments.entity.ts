import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Notifications } from '../mongo/Notifications.entity'
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

    @OneToMany(() => Notifications, (Notifications) => Notifications.payment_id)
    notification_id: Notifications[]

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
