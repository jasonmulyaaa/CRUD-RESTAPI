import { Sequelize } from "sequelize";

//import var db from database.js
import db from "../config/database.js";

//variable 'DataTypes' = Sequelize dari import Sequelize
const {DataTypes} = Sequelize;

//definisikan var db dan isi field dari table users
const User = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName:true
});

//export var User
export default User;

(async()=>{
    await db.sync();
})();