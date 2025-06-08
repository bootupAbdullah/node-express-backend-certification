let express = require('express');
let app = express();

console.log("Hello World")

absolutePath = __dirname + '/views/index.html'
publicDirPath = __dirname + '/public'

// Initial tets
// app.get("/", function(req, res){
//     res.send('Hello Express');
// })

//!! Serve Static Assets Using Middleware
// app.use(path, middlewareFunction)
//express.static(path)

app.use("/public", express.static(publicDirPath))

app.get("/", function(req, res) {
    res.sendFile(absolutePath)
})

//!!Serve JSON on a Specific Route
app.get("/json", function(req,res){
    res.json({"message": "Hello json"})
})

//!!Use the .env File

















 module.exports = app;
