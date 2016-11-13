var express = require("express"),  
    app = express(),
    http = require("http"),
    server = http.createServer(app),
 	  bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    morgan = require('morgan'),
    routes =require('express-group-routes'),
    database = require('./config/database');    // load the database config
  //  seedUser = require('./seeds/user.js'); 			// load the database config

/* Include models and controllers*/
var tvShowsModel     = require('./models/tvshows');
var UserModel     = require('./models/user');

var TVShowCtrl = require('./controllers/tvshows');
var UserCtrl = require('./controllers/user');

/* End Include controllers*/

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; 

require('./config/config.js')(app,database,bodyParser,methodOverride);
app.use(methodOverride());
app.use(morgan('dev'));

// Connection to DB
mongoose.connect(database.url, function(err, res) {
  if(err) console.log('Error: '+ err.message);
  console.log('Connected to Database');
});



var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Hello World!");
});


//API Routes
var tvshows = express.Router();
var user = express.Router();
require('./routes/tvshowsroutes.js')(tvshows,TVShowCtrl);
require('./routes/userroutes.js')(user,UserCtrl);

var path = '/api/v1';
//Define Routes
app.use(router);
app.use(path,tvshows);
app.use(path,user);


app.listen(3000, function() {  
	  console.log("Node server running on http://localhost:3000");
});
