import * as dotenv from 'dotenv'
import "reflect-metadata"
import { DataSource } from "typeorm"
dotenv.config()

export const PostgresAppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: false,
    entities: ['./entities/*.entity.ts'],
    migrations: [],
    subscribers: [],
})

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
