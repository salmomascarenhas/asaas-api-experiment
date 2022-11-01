import { Request, Response } from "express"

class Payments {
    async store(req: Request, res: Response) {
        throw new Error("Method not implemented.")
    }

    async destroy(req: Request, res: Response) {
        throw new Error("Method not implemented.")
    }

    async index(req: Request, res: Response) {
        throw new Error("Method not implemented.")
    }
}

export { Payments }
