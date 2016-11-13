var mongoose  = require("mongoose"); //Requerir mongodb
var	Schema    = mongoose.Schema; //BD


/*definicion de un modelo con sus atributos y su tipo de dato*/
var userSchema =  new Schema({
	name:      { type: String },
	password:  { type: String },
	admin: 	   { type: Boolean }
});

module.exports = mongoose.model('User', userSchema); //exportar al app.js