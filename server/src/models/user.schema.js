const {Schema, model} = require("mongoose");

const userSchema= new Schema({
    username: String,
    password: String,
    email:String
})


module.exports= model('UserSchema',userSchema);