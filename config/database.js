import mysql from "mysql";

const pool = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"m@ke1Tlarge",
    database:"akashdb",
}); 

export default pool;