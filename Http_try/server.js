const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home Page");
    }

    else if (req.url === "/about") {
        res.end("About Page");
    }
    else{
        res.end("404 not found");
    }

});

server.listen(8000, () => {
    console.log("Server started");
});