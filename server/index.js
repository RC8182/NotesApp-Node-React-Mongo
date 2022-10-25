const express= require('express');
const app= express();
const PORT= process.env.PORT || 4000 // Si está definido en el entorno, usarlo. Si no, el 4000;

//---------------------------------------- DB connection -------------------------------------------//
require('dotenv').config();
const mongoose= require('mongoose');
const DB_URL=process.env.DB_URL;

mongoose.connect(DB_URL);
mongoose.connection.on('error', (error)=>{
    console.log(error);
});
mongoose.connection.prependOnceListener('connected',()=>{console.log('DB connected')});

//--------------------------------------- Middleware -----------------------------------------------//
const methodooverride=require('method-override');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodooverride('_method'));
const cors = require("cors");
app.use(
    cors({
      origin: "http://localhost:3000",  // <-- location of the react app were connecting to
      credentials: true,
    })
  );
// Configuring Passport
const passport = require('passport');
const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(cookieParser("secretcode"));
app.use(session({
  secret: 'secretcode',
  resave: true,
  saveUninitialized: true,
  cookie : { secure : false, maxAge : (4 * 60 * 60 * 1000) }, // 4 hours
}));

// Initialize Passport

app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);




//---------------------------------------------- Routes --------------------------------------------//
const {newNote, deleteNote,updateNote, getAllUserNotes,getNoteById,
        register, login, getUser, logout}= require('./src/controllers/functions');

app.post('/api/new-note/:_id', newNote);
app.get('/api/all-notes/:_id', getAllUserNotes)
app.get('/api/all-notes/find/:_id', getNoteById)
app.put('/api/update/:_id',updateNote);
app.delete('/api/:userId/all-notes/delete/:_id', deleteNote);


app.get('/api/user', getUser);
app.post('/api/register', register);
app.post('/api/log-in', login);
app.get('/api/log-out', logout);


//--------------------------------------------- End Server -------------------------------------------//
app.listen(PORT,()=>{
    console.log(`Server listening on port: ${PORT}`)
});