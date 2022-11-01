import { app } from "./app"

app.listen(parseInt(process.env.PORT), () => {
    console.log(`Aplicattion on port ${parseInt(process.env.PORT)}`)
})