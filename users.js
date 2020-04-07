//models/UserModel.js
const mongoose = require("../database")
const schema 
{
    firstname: {type: mongoose.SchemaTypes.String, required: true },
    lastname: {type: mongoose.SchemaTypes.String, required: true },
    location: {type: mongoose.SchemaTypes.String, required: true }

};
//User collection to store first name, last name and location
const collectionName = "user"; //User Collection 
const userSchema = mongoose.Schema(schema);
const User = mongoose.model(collectionName,userSchema);
module.exports = User;
