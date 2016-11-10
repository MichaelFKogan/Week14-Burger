// Make sure all dependencies include all their code dependencies and try to figure out what each of them do.

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var orm = require('./config/rom.js')

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : '<databaseName_db>'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };

  console.log('connected as id ' + connection.threadId);

})












var port = 3000;
app.listen(port);