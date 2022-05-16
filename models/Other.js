const mongoose = require('mongoose');


const OtherSchema = new mongoose.Schema({
    title:String,text:String
})

module.exports = mongoose.model("Other", OtherSchema)