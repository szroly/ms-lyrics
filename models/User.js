const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'Please provide  username']
    },
    password:{
      type: String,
      required:[true, 'Please provide password'] 
    }
})

UserSchema.methods.createJWT = function () {
   return jwt.sign({userID:this._id, username:this.username},process.env.JWT_SECRET,{expiresIn: process.env.JWT_LIFETIME})
}

UserSchema.methods.comparePassword = async function (candidatePassword){
    const isMatch = await candidatePassword === this.password

    return isMatch
}

module.exports = mongoose.model("User", UserSchema)