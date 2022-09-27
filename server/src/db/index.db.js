require('dotenv').config();
const mongoose= require('mongoose');
const DB_URL='mongodb+srv://javier:Z1pRHtlE92CsGqu3@cluster0.pfqrpmy.mongodb.net/note';

mongoose.connect(DB_URL);
mongoose.connection.on('error', (error)=>{
    console.log(error);
});
mongoose.connection.prependOnceListener('connected',()=>{console.log('DB connected')});

module.exports=mongoose;