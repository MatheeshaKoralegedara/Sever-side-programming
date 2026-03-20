const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Hello World");
});

server.listen(8000,"localhost",()=>{
    console.log("Server is running on port 8000");
});