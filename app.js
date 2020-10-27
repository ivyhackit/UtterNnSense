var dotenv = require('dotenv');
var Express = require('express');
var mongoose = require('mongoose');
var User = require('./Models/UserModel');


//Configuring the dotenv to keep the env veriables private
dotenv.config()


//importing the database enviornment variables 
var dbUsername = process.env.DB_USERNAME
var dbPassword = process.env.DB_PASSWORD

//connecting to the Database
url = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.qrms5.mongodb.net/utterNnSense?retryWrites=true&w=majority`
mongoose.connect(url, {useNewUrlParser: true})


//confirming the connection to the database
const db = mongoose.connection;
db.once('open', () => {
    console.log("DB Connected")
})



//Exaple data to test DB connection to be deleted
const Dakotah = new User({
    name: 'tester',
    email:'Test@test.com',
    age:'60'
})

Dakotah.save((err, user)=> {
    if (err) return console.log(err)
    console.log(user)

})


