import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    universitas: DataTypes.STRING,
    jurusan: DataTypes.STRING,
}, {
    freezeTableName:true,
});

export default User;

(async() => {
    await db.sync()
})();