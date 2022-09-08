import * as dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import { PostgresAppDataSource } from "./db/typeorm-data-source"
dotenv.config()

const app = express()
PostgresAppDataSource.initialize()
    .then(() => {
        console.log("POSTGRES: Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("POSTGRES: Error during Data Source initialization", err)
    })

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Tudo certinho!' })
})

app.listen(parseInt(process.env.API_PORT), () => {
    console.log(`Aplicattion on port ${parseInt(process.env.API_PORT)}`)
})





