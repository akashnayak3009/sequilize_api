import express from 'express';

const app =express();
app.use(express.json());

app.get("/api",(req,res)=>{
    res.json({
        status:1,
        message:"This is rest api working"
    })
})

const PORT = 8000;
app.listen(PORT,()=>{
    console.log("Server is connected and running at port :", PORT)
})