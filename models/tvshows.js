var mongoose  = require("mongoose"), //Requerir mongodb
	Schema    = mongoose.Schema; //BD

/*definicion de un modelo con sus atributos y su tipo de dato*/
var tvshowSchema =  new Schema({
	title:   { type: String  },
	year:    { type: Number  },
	country: { type: String },
	poster:  { type: String },
	seasons: { type: Number },
	genre:   { type: String, enum:  ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy'] },
	summary: { type: String }
});

module.exports = mongoose.model('TVShow', tvshowSchema); //exportar al app.js