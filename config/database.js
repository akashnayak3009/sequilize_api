import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config();

const sequelize = new Sequelize(process.env.DB, 
    process.env.USER, 
    process.env.PASS,
    {
    dialect:process.env.DIALECT,
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    logging:false,    //disable logging
});

// Test the database connection
async function testConnection(){
    try{
        await sequelize.authenticate();
        console.log("connection to Database successfully")
    }catch(error){
        console.log("Database connection failed",error);
    }
}
testConnection();
export default sequelize;