/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Michael Smith
 * Email: smitmic5@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
var app = express();

app.engine('handlebars', express({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3000;

var rawData = fs.readFileSync('./twitData.json');
var twitData = JSON.parse(rawData);

app.get('/', function(req, res) {
  res.status(200).render('newView', {
    data: twitData,
    index: 1
  });
});
app.get('/twits/%3C:twit%3E', function(req, res) {
  var twitID = req.params.twit;
    console.log(twitID);
    var singleTwitArray = [];
    if ((twitID >= twitData.length) || (twitID < 0)) {
      res.status(404).render('error');
    } else {
      console.log(twitID);
      singleTwitArray.push(twitData[twitID]);
      res.status(200).render('newView', {data: singleTwitArray, index: 0});
    }
});

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).render('error');
});

app.listen(port, function() {
  console.log("Server is listening on port ", port);
});


