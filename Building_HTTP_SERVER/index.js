const http=require("http");

const server=http.createServer((req,res)=>{
    console.log("New Request Recieve");
    res.end("Hello from server");
});

// adding port number which should be listening to the request

// one server one port

server.listen(8000,()=>console.log("server started"));