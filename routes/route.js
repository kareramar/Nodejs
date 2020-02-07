const express=require('express');
const router=express.Router();
const User=require('../models/user')



router.get('/list',(req,res,next)=>{
    User.find((err,response)=>{
  res.json(response);
})
})

router.post('/addUser',(req,res,next)=>{
let newUserList=new User({
     firstname:req.body.firstname,
     lastname:req.body.lastname,
     phone:req.body.phone,
     address:req.body.address
})
newUserList.save((err,saveRecord)=>{
    if(err) {
        res.json({msg:'failed to save records...'+err})
        console.log('faield to save record...')
    }
    else {
        res.json({msg:'record save successfully...'})
        console.log('record save successfully...'+saveRecord)
    }
})
})

router.delete('/delete/:id',(req,res,next)=>{
    User.remove({_id:req.param.id},(err,result)=>{
if(!err) {
res.json({msg:'record delted successfully...'+result})
}
else {
    res.json({msg:'error to delete record'+err})
}
})
})
router.put('/update/:id',(req,res,next)=>{
   
let updatedList=new User({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    phone:req.body.phone,
    address:req.body.address
});
updatedList.updateOne({_id:req.param.id},(err,updateRecord)=>{
if(!err) {
    res.json({msg:'Record updated....'+updateRecord})
}
else{
    res.json({msg:'error in updation..'+err});
}
})
})
module.exports=router;