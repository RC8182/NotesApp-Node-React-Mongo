const NoteSchema = require("../models/note.schema");
const UserSchema= require('../models/user.schema');
require('dotenv').config();
const CLIENT_LOCAL_HOST= process.env.CLIENT_LOCAL_HOST;
const methods={};


/* -------------------------------Methods Notes --------------------------------*/


methods.newNote= async(req, res)=>{
  const{title, description}= req.body;
  const id= req.params._id;
  const newNote= new NoteSchema({
    userId: id,
    title: title,
    description: description
  });
  await newNote.save();
  console.log(newNote);
  res.writeHead(301, {
    Location: CLIENT_LOCAL_HOST +'/dashboard'
}).end();

}


methods.deleteNote=(req, res)=>{

  NoteSchema.findByIdAndDelete(req.params._id, async(err, ok)=>{
    if(err) throw err;
    if(ok){
      await res.status(200);
      res.writeHead(301, {
        Location: CLIENT_LOCAL_HOST +'/dashboard'
    }).end();
    
        }
      });
    }

methods.updateNote= async(req, res)=>{
  const id = req.params;
  const {title, description}= req.body;
const update= await NoteSchema.findOne({_id:id});
update.title= title;
update.description= description;
await update.save();
res.writeHead(301, {
  Location: CLIENT_LOCAL_HOST +'/dashboard'
}).end();
}

methods.getAllUserNotes= (req, res)=>{
  const userId= req.params._id;
NoteSchema.find({userId:userId},async(err, user)=>{
  if(err) throw err;
  if(!user){
    await res.send('User Has Not notes yet!');
  }else{
    await res.send(user);
  }
});
};

methods.getNoteById=async(req, res)=>{
const id= req.params._id;
const note= await NoteSchema.findById({_id: id});
console.log(note)
await res.send(note);

}

/*------------------------------- Methods Users --------------------------------*/

const bcrypt = require("bcryptjs");
methods.register= (req, res)=>{
  const {username, email, password}= req.body;

    UserSchema.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(password, 10);
  
        const newUser = new UserSchema({
          username: username,
          password: hashedPassword,
          email: email
        });
        await newUser.save();
        res.send("User Created");
      }
    });

} 

const passport = require('passport');
  methods.login=(req, res, next)=>{
    passport.authenticate("local", (err, user) => {
      if (err) throw err;
      if (user === false){
        res.status(200).json({message :'UserId or Password Incorrect', errors: true});
      }
      
      else {
        req.login(user, (err) => {
          if (err) throw err;
          console.log('---req.user---', req.user);
          res.status(200).json({message :'User Loggued', errors: false, user: req.user});
        });
      }
    })(req, res, next);
          };

   /* Una vez autenticado el usuario es almazenado en "req.user".
    Ahora el req.user que obtenemos en nuestro cliente contiene todos los datos de
     la seción del usuario y lo podremos utilizar en nuestro cliente las veces que sea necesario.
     */   
  
  methods.getUser= (req, res)=>{
    console.log('Req.Usr: ' + req.user)
    res.status(200).json({ message :'User Loggued', user: req.user});   
     
}

  methods.logout=(req, res)=>{
    req.logout(function(err) {
      if (err) { return next(err); }
      console.log('chau')
      res.status(200).json({ message :'User Loggued Out'});  
  })
  }


  
module.exports=methods;