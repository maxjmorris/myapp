const express = require('express');
const path = require('path')
//Init app
const app = express();

//Load view
app.set('views',path.join(_dirname,'views'));
app.set('view endgine', 'pug')

//home route
app.get('/', function(req,res)
{
    res.send('Hello World');


});
//Start server
app.listen(3000,function()
{
    console.log('Server started on port 3000....')
})