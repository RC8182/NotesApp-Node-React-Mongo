const {Schema, model} = require("mongoose");

const noteSchema= new Schema({
    userId: String,
    title: String,
    description: String
})


module.exports= model('NoteSchema',noteSchema);