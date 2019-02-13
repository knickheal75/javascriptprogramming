const express = require("express");
const app = express();
const port = 8080;

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}
var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}
var cb2 = function (req, res) {
  res.send('Hello from C!')
}
app.get('/', [cb0, cb1, cb2]);
app.listen(port,()=>{
  console.log(`Server Successfully Started at ${port}`)
});