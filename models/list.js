const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

const List=mongoose.model('User',userSchema);
module.exports=List;