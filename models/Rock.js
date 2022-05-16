const mongoose = require('mongoose');


const RockSchema = new mongoose.Schema({
    title:String,text:String
})

module.exports = mongoose.model("Rock", RockSchema)