let express = require('express');
require('dotenv').config()
let app = express();

console.log("Hello Wold");

let absolutePath = __dirname + '/views/index.html';
let publicDir   = __dirname + '/public';

// app.get("/",function(req, res) {
// res.send('Hello Express')
// })


app.get("/", function(req, res) {
    res.sendFile(absolutePath)
})

app.use("/public", express.static(publicDir));

// app.get("/json", function(req, res) {
//     res.json({"message" : "Hello json"})
// })


app.get("/json", function(req, res) {

    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message" : "HELLO JSON"})
    } else {
        res.json({"message" : "Hello json"})
    }
})





























 module.exports = app;
