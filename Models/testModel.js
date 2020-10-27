const mongoose = require('mongoose'); 

const testSchema = new mongoose.Schema({
    test: Boolean,
})



module.exports = mongoose.model('Test' , testSchema); 
