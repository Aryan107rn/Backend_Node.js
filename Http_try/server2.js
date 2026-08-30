const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/users") {
        res.end("Get users");
    }

    else if (req.method === "POST" && req.url === "/users") {
        res.end("Create user");
    }

    else if (req.method === "PUT" && req.url === "/users/10") {
        res.end("Replace user 10");
    }

    else if (req.method === "PATCH" && req.url === "/users/10") {
        res.end("Update user 10");
    }

    else if (req.method === "DELETE" && req.url === "/users/10") {
        res.end("Delete user 10");
    }

    else {
        res.end("404 Not Found");
    }

});

server.listen(8000);