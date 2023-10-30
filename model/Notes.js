//File to Create a Schema:

//Import:
const mongoose = require("mongoose");

//Create an object of Schema:
const Schema = mongoose.Schema;

//Function to create a Schema:
const NoteSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    }
})

//Export:
module.exports = mongoose.model('Note', NoteSchema);