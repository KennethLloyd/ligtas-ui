var express = require('express')
var app = express()
var path = require('path')

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static('views'));

app.listen(3000, function() {
  console.log('Server is running at http://localhost:3000')
})
