const mongoose = require('mongoose')


var userSchema = new mongoose.Schema({
  //attribute for the first name
  firstname :{
    type: String,
    required : true,
    maxlength:255
  },
  //attribute for the last name
  lastname : {
    type: String,
    required : true,
    maxlength:255
  },
  //attribute for the location
  location : {
    type: String,
    required : true,
    maxlength:255
  }
});


let Users = module.exports = mongoose.model('Users', userSchema)


var firstUser = new Users({firstname:'Max',lastname:'Morris',Location:'London'})
console.log(firstUser.firstname);

//Query to find user by first name
userSchema.statics.findByFirstName = function(firstname) {
  return this.find({ firstname: new RegExp(name,'i')});
};

//Query to find user by last name
userSchema.statics.findByLastName = function(lastname){
  return this.find({lastname: new RegExp(name,'i')});
};

//query to find location
userSchema.static('findByLocation', function(location){
  return this.find({ location });
});
