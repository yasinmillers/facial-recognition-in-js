const express = require("express");
const app = express();
const port = 5000;

app.route("/users")
    .get(function(req, res){
        res.send("This a get request");
    })
    .post((req, res)=>{
        res.send("This is a post request");
    });

app.route("/users/:id")
    .get(function(req, res){
        res.send(`Accessing element uri with id: ${req.params.id}`);
    })
    .put((req, res)=> {
        res.send(`Will update element with id ${req.params.id}`);
    })
    .delete(function(req, res){
        res.send(`Will delete record with id: ${req.params.id}`)
    });
    
app.router("/roles/:id?name=merchants")
    .get(function(req, res){
        res.send("param id")
    })
app.listen(port, function(){
    console.log(`App has started on port ${port}`)
})    