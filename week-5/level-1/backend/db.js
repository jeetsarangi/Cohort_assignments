const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://jeetsarangi:2MT8rYyfrF2gGkpg@cluster0.xkl2e93.mongodb.net/Cards');


const cardSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: [{ type: String }] ,
    linkedin: String,
    twitter: String
})


const Cards = mongoose.model('Cards',cardSchema);

module.exports = {Cards};
