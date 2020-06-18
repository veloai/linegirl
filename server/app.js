var express = require("express");
const port = process.env.PORT || 5000; 

var apiVersion1 = require("./server.js");
var apiVersion2 = require("./server2.js");
var apiVersion3 = require("./server3.js");

var app = express();
 
app.use("/v1",apiVersion1);
app.use("/v2",apiVersion2);
app.use("/v3",apiVersion3);
 
app.listen(port, function() {
    console.log(`Server is on ${port}`);
});