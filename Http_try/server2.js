// This is for http methods namely GET POST PUT PATCH DELETE 

const http = require("http");

const server = http.createServer((req,res)=>{
   if(req.method === "GET" && req.url === "/users"){
    res.end("Here are the user");
   }
});

server.listen(8000,()=>{
    console.log("Server started on port 8000");
});
