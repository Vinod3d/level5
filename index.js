import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const Port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello from docker");
})

app.listen(Port,()=>{
    console.log(`Server is running on ${Port}`);
})