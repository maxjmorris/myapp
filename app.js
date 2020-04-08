const express = require('express');
const path = require('path')
//Init app
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/myapp_db', {useNewUrlParser : true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  //should be connected
  console.log('Connected to MongoDB');
});

//Connect to models
let Users = require('./models/users')

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

//Add submit to POST route
app.post('/',function(req,res){
  let user = new Users();
  user.firstname = req.body.firstname;
  user.lastname = req.body.lastname;
  user.location = req.body.location;

  user.save(function()
{
  if(err){
    console.log(err);
    return
  }
  else {
    {
      res.redirect('/')
    }
  }
})
})
