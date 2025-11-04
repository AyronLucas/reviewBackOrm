import express from 'express'
import ControllerProduto from '../controller/produto.js'


const router = express.Router()

//fazer as rotas
router.get('/produtos', ControllerProduto.PegarTodos)
router.get('/produtos/:id', ControllerProduto.PegarUm)
router.post('/produtos', ControllerProduto.Criar)
router.put('/produtos/:id', ControllerProduto.Alterar)
router.delete('/produtos/:id', ControllerProduto.Deletar)

export default router 