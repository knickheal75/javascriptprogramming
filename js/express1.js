const express = require("express");
const app = express();
const port = 1234;

app.get("/",function(req,res){
  res.send("Hello THis is my Home PAge");
})
app.get("/signup",function(req,res){
  res.send("Hello This is my Sign Up Page");
})
app.listen(port,()=>{
  console.log(`Server Successfully Started at ${port}`)
});