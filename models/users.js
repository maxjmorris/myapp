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


let Users = modules.exports = mongoose.model('Users', userSchema)


var firstUser = new Users({firstname:'Max',lastname:'Morris',Location:'London'})
console.log(firstUser.firstname);


userSchema.statics.findByFirstName = function(firstname) {
  return this.find({ firstname: new RegExp(name,'i')});
};

userSchema.static('findByLocation', function(location){
  return this.find({ location });
});
