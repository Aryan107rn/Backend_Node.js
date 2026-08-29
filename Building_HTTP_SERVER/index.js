const http = require("http");
const fs = require("fs");
const url = require("url");
const PORT = 8000;

const server = http.createServer((req, res) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    const myUrl=url.parse(req.url);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Failed to write log:", err);

            res.statusCode = 500;
            res.end("Internal Server Error");
            return;
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello From Server");
    });
});

server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});