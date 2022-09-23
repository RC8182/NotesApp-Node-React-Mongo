const {Schema, model} = require("mongoose");

const noteSchema= new Schema({
    title: String,
    description: String
})


module.exports= model('NoteSchema',noteSchema);