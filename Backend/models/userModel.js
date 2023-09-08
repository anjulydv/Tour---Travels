const {Schema, model} = require('../connection');

const mySchema = new Schema({
    name : String,
    address : String,
    DOB:Number,
    password : String,
    

    avatar: String
});


module.exports = model( 'user' , mySchema);