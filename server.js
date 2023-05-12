const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
   
    if(req.url === "/"){
        res.writeHead(200 , {'Content-Type' : 'text/plain'});
        fs.readFile(path.join(__dirname, "views" , "pages.txt"),"utf-8" , (err , data)=>{
            fs.writeFile(path.join(__filename , "../views/txt.txt" ) , data , (err)=>{
                if(err) throw err;
                res.write("File has been saved");
                res.end();
            });
        })
    }
    else if(req.url === "/home"){
        res.writeHead(200 ,{'Content-Type' : 'text/html'});
        res.write("temp/home.html");
        res.end();
    }
    else if(req.url === "/create-file"){
        res.writeHead(200 , {'Content-Type' : 'text/plain'});
        fs.appendFile("views/new.html" ,"/pages/home.html" , (err)=>{
            if(err) throw err;
            res.end("File Saved");
        })
    }
    else{
        res.writeHead(404 , {'Content-Type' : 'text/html'});
        fs.readFile(path.join(__dirname , "temp/404.html" ), "utf-8" ,(err, data)=>{
            if(err) throw err;
            res.end(data);
        });
    }
    
})



server.listen(3002);