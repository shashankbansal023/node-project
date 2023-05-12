const Book = require('../model/BookModel');

exports.index = async(req,res) =>{
    const books = await Book.find();
    res.send(books);
}

exports.store = async(req, res)=>{
    try{
        await Book.create(req.body);
        res.status(200).json({data: "Book is stored"});
    }
    catch(err){
        res.json(err.errors);
    }
}