//comecar por aqui primeiro
import bancodados from '../config/database.js'

class Produto {
    constructor() {
        this.model = bancodados.db.define('produtos',{
            id:{
                type: bancodados.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true // TODO: mpstrar o erro ai
            },
            nome:{
                type: bancodados.db.Sequelize.STRING
            },
            disponivel:{
                type: bancodados.db.Sequelize.BOOLEAN
            },
            qtde:{
                type: bancodados.db.Sequelize.INTEGER
            },


        })//o banco

    }
}
export default new Produto().model