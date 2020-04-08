//getting started
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {useNewUrlParser : true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  //should be connected
});


var userSchema = new mongoose.Schema({
  firstname : String,
  lastname : String,
  location : String
});


var Users = mongoose.model('Users', userSchema);


var firstUser = new Users({firstname:'Max',lastname:'Morris',Location:'London'})
console.log(firstUser.firstname);


userSchema.statics.findByFirstName = function(firstname) {
  return this.find({ firstname: new RegExp(name,'i')});
};

userSchema.static('findByLocation', function(location){
  return this.find({ location });
});
