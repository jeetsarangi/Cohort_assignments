const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://jeetsarangi:2MT8rYyfrF2gGkpg@cluster0.xkl2e93.mongodb.net/todos');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})



const todoDb = mongoose.model('todos',todoSchema);

// const Admin = mongoose.model('Admin', AdminSchema);

module.exports = { 
    todoDb
 }