const mongoose = require('mongoose');

const url ="mongodb+srv://anjulyadav19:1234@cluster0.9gemz5q.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect(url)
.then((result) => {
    console.log('database connected successfully');
    // console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;