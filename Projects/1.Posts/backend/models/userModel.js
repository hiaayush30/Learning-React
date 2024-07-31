const mongoose=require('mongoose');

mongoose.connect(process.env.CONNECTION_URL);

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    email:String,
});

const User=mongoose.model('User',userSchema);
module.exports=User;