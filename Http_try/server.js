const http = require("http");

const server=http.createServer((req,res)=>{
    req.end("Hello World");
});

server.listen(8000,()=>{
    console.log("Server started");
});

