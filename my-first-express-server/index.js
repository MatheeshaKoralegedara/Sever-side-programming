const express = require("express");  //importing the express module

const app = express();      //creating an instance of express

app.get("/hello",(req,res) => {         //defining a route handler for GET requests to the "/hello" path
    res.send("Hello World");           //sending a response back to the client with the message "Hello World"
});

app.listen(3000);           //starting the server and listening on port 3000 for incoming requests