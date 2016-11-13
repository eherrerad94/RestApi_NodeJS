//File: controllers/Users.js
var mongoose = require('mongoose'),
	User     = mongoose.model('User');
var jwt = require('jsonwebtoken');
var database = require('../config/database');    // load the database config


//var service = require('./service');


//GET - Return all Users 
exports.findAllUsers = function(req, res) {
	User.find(function (err, users){
		if (err) {
		 res.send(500, err.message);
		}

		for (var i = 0; i < users.length;  i++)
		{
		  hidePassword(users[i]);
		}

		console.log('GET /users');
		res.status(200).json(users);
	});
};


//GET - Return a User with specific ID
exports.findById = function(req, res){
	User.findById(req.params.id, function(err, user){
		if (err) {
			res.send(500,err.message);
		}
		hidePassword(user);
		console.log('GET /user/'+req.params.id);
		res.status(200).jsonp(user);
	});
};

//POST - Insert a new User in the DB

exports.addUser = function(req, res){
	console.log('POST');
	console.log(req.body);

	var user = new User(
		{
			name:   req.body.name,
			password: req.body.password,
			admin: req.body.admin
		}
	);

	console.log(user.name+" "+user.admin+" "+user.password);
		//console.log(user.name);

	user.save(function (err, user) {
		if (err) {
			return res.status(500).send(err.message);
		}
		res.status(200).jsonp(user);
	});
};


//PUT - Update a register already exists


exports.updateUser = function(req, res) {  
    User.findById(req.params.id, function(err, User) {
        User.name   = req.body.name;
        User.password    = req.body.password;
        User.admin = req.body.admin;


        User.save(function(err) {
            if(err){
             return res.status(500).send(err.message);
            }
      	
      		res.status(200).jsonp(User);
        });
    });
};


//DELETE - Delete a User with specified ID
exports.deleteUser = function(req, res) {  
    User.findById(req.params.id, function(err, User) {
        User.remove(function(err) {
            if(err){ 
            	return res.status(500).send(err.message);
   			}
   			es.status(200).send();
        });
    });
};

exports.authenticate = function(req, res) {
	// find the user
  User.findOne({
    	name: req.body.name
 	}, function(err, user) 
	  {

	    if (err) console.log(err.message);

	    if (!user)
	    {
	      res.json({ success: false, message: 'Authentication failed. User not found.' });
	    }
	    else if (user)
	    {
	      // check if password matches
	      if (user.password != req.body.password)
	      {
	        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
	      } 
	      else
	      {

	    

	        // if user is found and password is right
	        // create a token
	      	 var token = jwt.sign(user, database.secret, {
	          expiresIn: 60*60*24 // expires in 24 hours
	        });
	      	 console.log(token);
	       

	        // return the information including token as JSON
	        res.status(200).json({
	          success: true,
	          message: 'Enjoy your token!',
	          token: token
	        });
	        
	      }   

	    }

  });
}

function hidePassword(user) {
	user.password = "";
}
