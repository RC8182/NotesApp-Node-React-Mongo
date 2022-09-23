const noteSchema = require("../models/note.schema");

const methods={};
methods.home= (req, res)=>{
    res.send('Ingresa una nota!')
}

methods.newNote= async (req, res)=>{
  const  {title, description}= req.body;
  const post= noteSchema({
    title: title,
    description: description
  })
    console.log(post)
    await post.save();
    res.writeHead(301, {
        Location: `http://localhost:3000/api/all-notes`
      }).end();

}

methods.allNotes= async (req, res)=>{
    const notes= await noteSchema.find();
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(notes);

}

methods.deleteNote= async (req, res)=>{

   try{
        await noteSchema.findByIdAndDelete(req.params._id);
        res.status(200);
        res.writeHead(301, {
          Location: `http://localhost:3000/api/all-notes`
        }).end();
   } catch{
        res.status(404);
        console.log("ERROR");
   }
}
module.exports=methods;