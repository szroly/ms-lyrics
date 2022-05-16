const mongoose = require('mongoose');


const TangoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'A cim megadása kötelező'],
        maxlength:[25, 'A cim hossza max. 25 karakter!']
    },
    text:{
        type:String,
        required: [true, 'A szöveg mező nem maradhat üresen']
    }
})

module.exports = mongoose.model("Tango", TangoSchema)