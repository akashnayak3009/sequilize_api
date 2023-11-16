import express from 'express';
import dotenv from 'dotenv';

const app =express();
app.use(express.json());

dotenv.config();

app.get("/api",(req,res)=>{
    res.json({
        status:1,
        message:"This is rest api working"
    })
})

app.listen(process.env.PORT,()=>{
    console.log("Server is connected and running at port :",process.env.PORT)
})