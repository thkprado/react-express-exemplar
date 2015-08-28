var express = require('express');
var app = new express();
var rootPath = require('path').normalize(__dirname + '/../');

app.set('views', rootPath + 'app');

app
  .get('/', function(req, res) {
    res.render('index.ejs', {});
  })
  .use(express.static(rootPath + '.tmp'))
  .listen(7777);
