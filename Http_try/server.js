const http = require("http");

const server=http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    req.end("Hello World");
});

server.listen(8000,()=>{
    console.log("Server started");
});

