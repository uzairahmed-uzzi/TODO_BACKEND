const mongoose=require('mongoose');
// BASE_URI="mongodb+srv://uzzi_speaks:Pakistan123@cluster0.ggxogiz.mongodb.net/tododb";
// const BASE_URI=require('dotenv').config({path:'./config.env'});

async function connectDb(){
    try{
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true
      });
      console.log("Database Connected")
    }
    catch(error){
      console.log(error);
      process.exit(1);
    }
  }
  module.exports = connectDb;