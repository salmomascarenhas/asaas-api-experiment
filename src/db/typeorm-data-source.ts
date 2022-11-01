import * as dotenv from 'dotenv'
import "reflect-metadata"
import { DataSource } from "typeorm"
dotenv.config()

export const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: false,
    entities: ['./entities/pg/*.entity.ts'],
    migrations: ['./migrations/'],
    subscribers: [],
})

const createConeccion = (host = 'postgres'): Promise<DataSource> => {
    return dataSource.setOptions({ host }).initialize()
}

export const MongoAppDataSource = new DataSource({
    type: 'mongodb',
    host: process.env.MONGO_HOST,
    port: parseInt(process.env.MONGO_PORT),
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    database: process.env.MONGO_DATABASE,
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})

export { createConeccion }

export default dataSource
