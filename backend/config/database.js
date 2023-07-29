import { Sequelize } from "sequelize"

//connect database dengan mysql
const db = new Sequelize('crud_node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

//export var db
export default db;