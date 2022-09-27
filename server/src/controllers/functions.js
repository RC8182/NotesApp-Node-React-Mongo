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
        Location: `https://appnotes8182.netlify.app/api/all-notes`
      }).end();

}

methods.allNotes= async (req, res)=>{
    const notes= await noteSchema.find();
    res.set('Access-Control-Allow-Origin', 'https://appnotes8182.netlify.app');
    res.send(notes);

}

methods.deleteNote= async (req, res)=>{

   try{
        await noteSchema.findByIdAndDelete(req.params._id);
        res.status(200);
        res.writeHead(301, {
          Location: `https://appnotes8182.netlify.app/api/all-notes`
        }).end();
        
   } catch{
        res.status(404);
        console.log("ERROR");
   }
}

methods.updateNote= async (req, res)=>{
  const id = req.params._id;
  const {title, description}= req.body;
  const update= await noteSchema.findOne({
    _id: id,
  });
  update.title=title;
  update.description=description;
      await update.save();
  res.status(200);
  res.writeHead(301,{Location: 'https://appnotes8182.netlify.app/api/all-notes'}).end();    

}
module.exports=methods;