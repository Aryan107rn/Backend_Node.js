// This is for http methods namely GET POST PUT PATCH DELETE 

const http = require("http");

const server = http.createServer((req,res)=>{
   if(req.method === "GET" && req.url === "/users"){
    res.end("Here are the user");
   }
   if (req.method === "POST" && req.url === "/users") {
    res.end("Create a new user");
}
   else{
    res.end("Nothing useful");
   }
});

server.listen(3000,()=>{
    console.log("Server started on port 3000");
});
