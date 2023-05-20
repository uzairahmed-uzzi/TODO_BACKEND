const express=require('express');
const router=express.Router();
const {get,post,put,del} = require('../CONTROLLER/todoController');

router.get('/get',get);
router.post('/create',post);   
router.put('/update',put);
router.delete('/delete/:id',del);
module.exports=router;