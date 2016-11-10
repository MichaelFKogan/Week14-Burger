/*
                                           o8o                     
                                           `"'                     
oooo d8b  .ooooo.   .ooooo oo oooo  oooo  oooo  oooo d8b  .ooooo.  
`888""8P d88' `88b d88' `888  `888  `888  `888  `888""8P d88' `88b 
 888     888ooo888 888   888   888   888   888   888     888ooo888 
 888     888    .o 888   888   888   888   888   888     888    .o 
d888b    `Y8bod8P' `V8bod888   `V88V"V8P' o888o d888b    `Y8bod8P' 
                         888.                                      
                         8P'                                       
                         "                                         
*/

// Make sure all dependencies include all their code dependencies and try to figure out what each of them do.

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

// var orm = require('./config/rom.js')

var app = express();
var router = express.Router();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*
ooo        ooooo              .oooooo..o   .oooooo.      ooooo        
`88.       .888'             d8P'    `Y8  d8P'  `Y8b     `888'        
 888b     d'888  oooo    ooo Y88bo.      888      888     888         
 8 Y88. .P  888   `88.  .8'   `"Y8888o.  888      888     888         
 8  `888'   888    `88..8'        `"Y88b 888      888     888         
 8    Y     888     `888'    oo     .d8P `88b    d88b     888       o 
o8o        o888o     .8'     8""88888P'   `Y8bood8P'Ybd' o888ooooood8 
                 .o..P'                                               
                 `Y8P'                                                
*/

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'burgers_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };

  console.log('connected as id ' + connection.threadId);

})

/*
  .oooooo.   ooooooooo.   ooo        ooooo 
 d8P'  `Y8b  `888   `Y88. `88.       .888' 
888      888  888   .d88'  888b     d'888  
888      888  888ooo88P'   8 Y88. .P  888  
888      888  888`88b.     8  `888'   888  
`88b    d88'  888  `88b.   8    Y     888  
 `Y8bood8P'  o888o  o888o o8o       o888o                                  
 */


var orm = {

selectAll: function(tableInput, colToSearch, valOfCol){
  var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';
    connection.query(queryString, [valOfCol], function (err, result) {
      console.log(result);
    });
}/*,

insertOne: function(){
  
},

updateOne: function(){
  
}*/

}

/*
                                  .o8            oooo  
                                 "888            `888  
ooo. .oo.  .oo.    .ooooo.   .oooo888   .ooooo.   888  
`888P"Y88bP"Y88b  d88' `88b d88' `888  d88' `88b  888  
 888   888   888  888   888 888   888  888ooo888  888  
 888   888   888  888   888 888   888  888    .o  888  
o888o o888o o888o `Y8bod8P' `Y8bod88P" `Y8bod8P' o888o 

*/

var cat = {

  all: function (callbback) {
    orm.all('index', function (res) {
      callback(res);
    });

  },
  // cols and vals are arrays
  create: function (cols, vals, cb) {
    orm.create('cats', cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update('cats', objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete('cats', condition, function (res) {
      cb(res);
    });
  }
};

/*                                                           
 .ooooo.   .ooooo.  ooo. .oo.   ooo. .oo.    .ooooo.          
d88' `"Y8 d88' `88b `888P"Y88b  `888P"Y88b  d88' `88b         
888       888   888  888   888   888   888  888ooo888 8888888 
888   .o8 888   888  888   888   888   888  888    .o         
`Y8bod8P' `Y8bod8P' o888o o888o o888o o888o `Y8bod8P'         
                                                                                                    
              .    o8o                                        
            .o8    `"'                                        
 .ooooo.  .o888oo oooo   .ooooo.  ooo. .oo.    .oooo.o        
d88' `"Y8   888   `888  d88' `88b `888P"Y88b  d88(  "8        
888         888    888  888   888  888   888  `"Y88b.         
888   .o8   888 .  888  888   888  888   888  o.  )88b        
`Y8bod8P'   "888" o888o `Y8bod8P' o888o o888o 8""888P'        
*/

// app.get('/', function(req, res){
// res.send('working');
// });

router.get('/', function (req, res) {
   res.redirect('/index');
});


router.get('/index', function (req, res) {

  cat.all(function (data) {

    var handlebarsObject = { index: data };

    console.log(handlebarsObject);

    res.render('index', handlebarsObject);
  });
});


/*
router.post('/cats/create', function (req, res) {
  cat.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function () {
    res.redirect('/cats');
  });
});

router.put('/cats/update/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  cat.update({ sleepy: req.body.sleepy }, condition, function () {
    res.redirect('/cats');
  });
});

router.delete('/cats/delete/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  cat.delete(condition, function () {
    res.redirect('/cats');
  });
});

*/


// EXPRESS LISTENER
// ===========================================================
app.use('/', router);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});
