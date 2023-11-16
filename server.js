import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import router from './api/users/usersRoute.js';

const app =express();
app.use(express.json());

dotenv.config();

sequelize.sync().then(()=>{
    console.log("All models were synchronized successfully")
}).catch(error=>{
    console.error("Error synchronizing models", error);
});

app.use('/users', router);

app.listen(process.env.PORT,()=>{
    console.log("Server is connected and running at port :",process.env.PORT)
})