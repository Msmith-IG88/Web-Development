/* 
 * Write your server code in this file.
 * 
 * name: Michael Smith
 * email: smitmic5@oregonstate.edu
 */
var http = require('http');
var fs = require('fs');

var indexContent = fs.readFileSync('./public/index.html', {encoding: 'utf8'});
var cssContent = fs.readFileSync('./public/style.css', {encoding: 'utf8'});
var jsContent = fs.readFileSync('./public/index.js', {encoding: 'utf8'});
var fourContent = fs.readFileSync('./public/404.html', {encoding: 'utf8'});

var Port = process.env.PORT || 3000;

function requestHandler(req, res) {
  console.log("URL Requested: ", req.url);
  if ((req.url === '/index.html') || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(indexContent);
  } else if (req.url === '/index.js') {
    res.writeHead(200, {'Content-Type': 'application/javascript'});
    res.write(jsContent);
  } else if (req.url === '/style.css') {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(cssContent);
  } else if (req.url === '/404.html') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fourContent);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write(fourContent);
  }
  res.end();
}

var server = http.createServer(requestHandler);
server.listen(Port, function (){
  console.log("Server is listening on port: ", Port);
});