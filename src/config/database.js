// configurar a conexao com o banco
import { Sequelize } from "sequelize"

class BancoDados {
    constructor() {
        this.init()
    }

    init() {
        //colocar todas as configs do banco
        this.db = new Sequelize({
            database: 'Estoque',//nome para o banco
            host: 'localhost',//servidor
            username: 'root',//usuario
            password: '',//senha
            dialect: 'mysql'
        })
    }
}
export default new BancoDados()