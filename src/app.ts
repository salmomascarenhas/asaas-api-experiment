import * as dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import dataSource from './db/typeorm-data-source'
dotenv.config()

const app = express()

dataSource.initialize()
    .then(() => {
        console.log("POSTGRES: Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("POSTGRES: Error during Data Source initialization", err)
    })

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Tudo certinho!' })
})

export { app }





