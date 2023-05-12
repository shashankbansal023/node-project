
const User = require('../model/UserModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

exports.signup = async(req,res)=>{
    const password = await bcrypt.hash(req.body.password, saltRounds);
    const data = {...req.body , password};
    const user = await User.create(data);
    res.send({user});
};

exports.login = async(req,res) =>{
    const user = User.findOne({email: req.body.email});
    if(!user){
        res.status(404).json({error: "User not found"});
    }

    const isUserPasswordMatch = await bcrypt.compare(req.body.password , user.password);
    if(!isUserPasswordMatch){
        res.status(404).json({error: "User password not matched"});
    }

    const token = jwt.sign({user} , "fake-jwt-secret");
    res.json({user , access_token : token})
}