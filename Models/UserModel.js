const mongoose = require('mongoose');


//Setting up the modle for user Schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String, 
    age: String,

})



module.exports = mongoose.model('User' , userSchema); 
