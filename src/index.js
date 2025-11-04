import express from 'express'
import bancodados from './config/database.js'
import router from './router/produto.js'

const app = express()
app.use(express.json())

app.use('/api/v1', router)
//iniciar o servidor
const port = 3000

bancodados.db
    .sync({ force: false })
    .then(() => {
        app.listen(port, () => {
            console.log("Servidor rodando na porta: " + port)
        })




    })