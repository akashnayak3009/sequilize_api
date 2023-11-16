import mysql from "mysql";

const pool = mysql.createConnection({
    port:process.env.MYSQL_PORT,
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASS,
    database:process.env.MYSQL_DB,
}); 

export default pool;