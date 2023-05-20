const mongoose=require('mongoose');
const TodoModel=require('../MODELS/todoSchema');

exports.get=async(req,res)=>{
  const todos =await TodoModel.find();
  res.status(200).json( todos);
}
exports.post=async(req,res)=>{
  const {todo}=req.body;
  const todos=new TodoModel({
    todo
  });
  await todos.save();
  res.status(200).json(todos);
}
exports.put=async(req,res)=>{
  const {id,todo}=req.body;
  const todos =await TodoModel.findByIdAndUpdate(id,{todo},{new:true});
  res.json(todos);
}
exports.del=async(req,res)=>{
  const todos =await TodoModel.findByIdAndDelete(req.params.id);
  res.json(todos);
}
