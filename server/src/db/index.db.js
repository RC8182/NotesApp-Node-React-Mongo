require('dotenv').config();
const mongoose= require('mongoose');
const DB_URL=process.env.DB_URL;

mongoose.connect(DB_URL);
mongoose.connection.on('error', (error)=>{
    console.log(error);
});
mongoose.connection.prependOnceListener('connected',()=>{console.log('DB connected')});

module.exports=mongoose;