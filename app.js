var dotenv = require('dotenv');
var Express = require('express');
var mongoose = require('mongoose');
var User = require('./Models/UserModel');


//Configuring the dotenv to keep the env veriables private
dotenv.config()


//importing the database enviornment variables 
//these will unused for now...
var dbUsername = process.env.DB_USERNAME
var dbPassword = process.env.DB_PASSWORD

//connecting to the Database
url = `mongodb+srv://ivy:lisphacker@cluster0.qrms5.mongodb.net/utterNn?retryWrites=true&w=majority`
mongoose.connect(url, {
    useNewUrlParser: true,
//gets ride of error message 
    useUnifiedTopology: true
  })


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

//Testing....
const app = Express();
const path = require('path');
const port = 3000
const router = Express.Router();

router.get ('/', (req,res) => {
	res.sendFile(path.join(__dirname+'/index.html'));
});
app.use('/', router);
app.listen(port, () => {
	console.log("Sucessfully submited")
});
