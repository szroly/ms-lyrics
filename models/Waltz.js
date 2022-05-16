const mongoose = require('mongoose');


const WaltzSchema = new mongoose.Schema({
    title:String,text:String
})

module.exports = mongoose.model("Waltz", WaltzSchema)