var express = require('express');
var app = new express();
var parse = require('body-parser');
var morgan = require('morgan');
var React = require('react/addons');
var GroceryItem = require('./models/GroceryItem.js');

require('babel/register');
require('./database.js');

var rootPath = require('path').normalize(__dirname + '/../');

app.use(morgan('dev'));
app.set('views', rootPath + 'app');

app
  .get('/', function(req, res) {
    // res.render('index.ejs', {});
    var application =
      React.createFactory(require('./../app/components/GroceryItemList.jsx'));
    GroceryItem.find(function(error, doc) {
      var generated = React.renderToString(application({
        items: doc
      }));
      res.render('./../app/index.ejs', {
        reactOutput: generated
      });
    });
  })
  .use(express.static(rootPath + '.tmp'))
  .use('/bower_components/skeleton/css', express.static(rootPath + 'bower_components/skeleton/css'))
  .listen(7777);

app.use(parse.json());
app.use(parse.urlencoded({
  extended: false
}));

require('./routes/items.js')(app);
