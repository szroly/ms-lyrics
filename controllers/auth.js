
const User = require("../models/User");
require('dotenv').config();


 exports.login = async (req, res) => {
    const { username, password } = req.body;
    
    if(!username || !password){
      return  res.status(400).json({msg: 'Please provide username and passwrod'})
    }

    const user = await User.findOne({username: username})
    console.log('user',user)
    if(!user){
        return res.status(401).json({msg: 'Invalid Credentials'})
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        return res.status(401).json({msg: 'Invalid Credentials'})
    }

    const token = user.createJWT();
    res.status(200).json({user:{username:user.username},token})
}

exports.logout = async (req, res) => {
    const token = "";
    res.status(204).json({token})
}



