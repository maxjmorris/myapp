const express = require('express');
const path = require( 'path')


//Init app
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/myapp_db', {useNewUrlParser : true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  //should be connected
  console.log('Connected to MongoDB');
});

//Connect to models
let Users = require('./models/users');



//Load view
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug')


//Body parser middleware
//parse application
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//home route
app.get('/', function(req,res)
{
    res.render('index');
});
//Start server
app.listen(3000,function()
{
    console.log('Server started on port 3000....')
})

function handleRedirect(req, res){
  const targetUrl = targetBaseUrl + req.originalUrl;
  res.redirect(targetUrl);
}

//Sign up route
app.get('/signup',function(req,res){
  res.render('signup',
{
  title : 'Sign Up'
});
});
//Find User route
app.get('/FindAUser',function (req,res) {
  res.render('findusers',
{
  title: 'Find A User'
});
});

//Show user route
app.get('/users', function (req, res) {
  Users.find({}, function(err, users) {
    if (err)
    {
      console.log(err);
    }
    else{
      res.render('showusers',{
        title: 'Show Users',
        users: users
      });
    }
  });
});


//Add submit to POST route
app.post('/signup',function(req,res){
  let user = new Users();
  user.firstname = req.body.firstname;
  user.lastname = req.body.lastname;
  user.location = req.body.location;

  user.save(function(err)
{
  if(err){
    console.log(err);
    return
  }
  else {
    {
    //res.send("User "+user.firstname+" " +user.lastname+" has been saved to the databse")
    res.redirect('/')
    }
  }
});
});


//Number Range route
app.get('/NumberRange', function (req,res) {
  res.render('numberrange',
  {
    title: 'Number Range'
  });
});



// //Test python number range
app.post('/getnumber',getnumber);

function getnumber(req,res)
{

  //use child process
  var spawn = require("child_process").spawn;

  var process = spawn('python', ["./number_range.py",req.body.number]);

process.stdout('data', function(data)
{
 res.send(data.tostring());
})
}

//Test for call name
app.get('/name', callName);

function callName(req, res)
{
  //Use the child process
  var spawn = require("child_process").spawn;

  var process = spawn('python', ["./call_name.py",
req.query.firstname,req.query.lastname]);


process.stdout.on('data', function(data)
{
  res.send(data.toString());
})
}

//Test number range
app.get('/number',callNumber);

function callNumber(req, res)
{
  //Use the child process
  var spawn = require("child_process").spawn;

  //use the number range python script
  var process = spawn('python', ["./number_range.py",
req.query.number_range]);

process.stdout.on('data', function(data)
{
  res.send(data.toString());
})
}



