import { Sequelize } from "sequelize";

const sequelize = new Sequelize("akashdb", 
    "root", 
    "m@ke1Tlarge",
    {
    dialect:"mysql",
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