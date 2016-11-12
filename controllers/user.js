//File: controllers/Users.js
var mongoose = require('mongoose'),
	User   = mongoose.model('User');


//GET - Return all Users 
exports.findAllUsers = function(req, res) {
	User.find(function (err, users){
		if (err) {
		 res.send(500, err.message);
		}

		console.log('GET /users')
		res.status(200).jsonp(users);
	});
};


//GET - Return a User with specific ID
exports.findById = function(req, res){
	User.findById(req.params.id, function(err, user){
		if (err) {
			res.send(500,err.message);
		}
		console.log('GET /user/'+req.params.id);
		res.status(200).jsonp(user);
	});
};

//POST - Insert a new User in the DB

exports.addUser = function (req, res){
	console.log('POST');
	console.log(req.body);

	var user = new User({
		name:   req.name,
		password: req.password,
		admin: req.admin
	});


	tvshow.save(function (err, tvshow) {
		if (err) {
			return res.status(500).send(err.message);
		}

		res.status(200).jsonp(tvshow);
	});
};


//PUT - Update a register already exists


exports.updateUser = function(req, res) {  
    User.findById(req.params.id, function(err, User) {
        User.title   = req.body.petId;
        User.year    = req.body.year;
        User.country = req.body.country;
        User.poster  = req.body.poster;
        User.seasons = req.body.seasons;
        User.genre   = req.body.genre;
        User.summary = req.body.summary;

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

	    if (!user) {
	      res.json({ success: false, message: 'Authentication failed. User not found.' });
	    } else if (user) {

	      // check if password matches
	      if (user.password != req.body.password) {
	        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
	      } 
	      else {
	        // if user is found and password is right
	        // create a token
	        var token = jwt.sign(user, app.get('superSecret'), {
	          expiresInMinutes: 1440 // expires in 24 hours
	        });

	        // return the information including token as JSON
	        res.json({
	          success: true,
	          message: 'Enjoy your token!',
	          token: token
	        });
	      }   

	    }

  });
}