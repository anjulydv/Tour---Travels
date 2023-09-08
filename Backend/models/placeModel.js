const {Schema, model} = require('../connection');

const mySchema = new Schema({
    title : String,
    description : String,
    address : String,
    // images:String,
    location : String,
    image: String
});


module.exports = model( 'place' , mySchema);