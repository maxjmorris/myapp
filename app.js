const express = require('express');
const path = require('path')
//Init app
const app = express();
var mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/myapp_db', {useNewUrlParser : true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  //should be connected
  console.log('Connected to MongoDB');
});

//Connect to models
let users = require('./models/users')
//Load view
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug')

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
