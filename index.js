const express = require("express");
const mongoose = require("mongoose");
const router=require('./routes/routes');
const cors=require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
app.get("/sample",(req,res)=>{
  res.send("HUA KUCH????");
})
app.use(express.json());

app.use("/",router);
require('dotenv').config({path:'./config.env'});
const connectDb=require('./db/db');
connectDb();



app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));