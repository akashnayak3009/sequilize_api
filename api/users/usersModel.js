import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const User = sequelize.define('User',{
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    }
},{timestamps:true})

export default User;