const mongoose = require('mongoose');
const { Schema } = require('zod');

mongoose.connect('mongodb+srv://jeetsarangi:2MT8rYyfrF2gGkpg@cluster0.xkl2e93.mongodb.net/paytm');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});



// Create a model from the schema
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Accounts', accountSchema);


module.exports = {
	User,
    Account
};