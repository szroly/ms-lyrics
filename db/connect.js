const mongoose = require('mongoose');


const connectDB = (url) => {
mongoose.connect(url)
return 
}

module.exports = connectDB;

