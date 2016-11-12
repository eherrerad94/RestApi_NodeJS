var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/*definicion de un modelo con sus atributos y su tipo de dato*/
var userSchema =  new Schema({
	name:   { type: String  },
	password:    { type: Number  },
	admin: { type: Boolean },
});

module.exports = mongoose.model('User', userSchema); //exportar al app.js