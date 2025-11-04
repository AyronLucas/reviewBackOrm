import Produto from "../model/produto.js"

class ServiceProduto {
    async PegarTodos() {
        return Produto.findAll()
    }
    async PegarUm(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const Produto = await Produto.findByPk(id)

        if (!Produto) {
            throw new Error(`Produto ${id} não encontrado`)
        }
        return 
    }
    async Criar(nome, disponivel, qtde) {
        
        await Produto.Criar({
            nome, disponivel, qtde
        })
    }    
    
    async Alterar(id, nome, disponivel, qtde) {
        if(!id) {
            throw new Error(`Produto ${id} não encontrado`)
        }
        const produto = await Produto.findByPk(id)
        
        if(!produto) {
            throw new Error(`Produto ${id} não encontrado`)
        }
        produto.nome =nome,
        produto.disponivel = disponivel,
        produto.qtde = qtde,


        await produto.save()
    }
    async Deletar(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const produto = await Produto.findByPk(id)

        if (!produto) {
            throw new Error(`Usuário ${id} não encontrado`)
        }
        await produto.destroy()
    }
}

export default new ServiceProduto()