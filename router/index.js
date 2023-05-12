const express = require('express');
const router = express.Router();
const bookRouter = require('./BookerRouter.js');
const authRouter = require('./AuthRouter.js');
const path = require('path');

router.get('/', (req,res)=>{
    res.render("index" ,{ name : "Shashank"});
})

router.use('/book' , bookRouter);
router.use('/auth', authRouter);

router.all('/*' , (req,res) => {
    res.sendFile(path.join(__dirname ,'../temp/404.html'));
})