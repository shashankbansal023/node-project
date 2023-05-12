const express = require('express');
const bookRouter = express.Router();
const auth = require('middleware/index.js');

bookRouter.use(auth)
    .route('/')
    .get('/' , (req,res) => {
        res.send(req.body);
    })
    .post('/' , (req,res) => {
        res.send(req.body);
    })
    .put('/' , (req, res) => {
        res.send(req.body);
    });

bookRouter.route('/:id')
    .get('/' , (req, res)=>{
        res.send("Get file");
    })    
    .post('/' , (req, res)=>{
        res.send("Post request");
    })
    .delete('/' ,(req, res) => {
        res.send("Delete request");
    })
    .put('/' , (req,res)=>{
        res.send("Put Request");
    })

module.exports = bookRouter;