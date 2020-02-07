const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const User=module.exports=mongoose.model('User',UserSchema);