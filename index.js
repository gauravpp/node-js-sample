var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))



app.get('/', function(request, response) {
  
  // Network interfaces
var ifaces = require('os').networkInterfaces();

// Iterate over interfaces ...
var adresses = Object.keys(ifaces).reduce(function (result, dev) {
  return result.concat(ifaces[dev].reduce(function (result, details) {
    return result.concat(details.family === 'IPv4' && !details.internal ? [details.address] : []);
  }, []));
});

// Print the result
console.log(adresses);
  response.send(adresses);
})




app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
