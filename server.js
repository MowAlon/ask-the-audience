const http = require('http')
const express = require('express')
const app = express()
var port = process.env.PORT || 3000
var server = http.createServer(app)
                  .listen(port, function(){
                    console.log('Listening on port ' + port + '.')
                  })

app.use(express.static('public'))
app.get('/', function (req, res){
  res.sendFile(__dirname + '/public/index.html')
})

module.exports = server
