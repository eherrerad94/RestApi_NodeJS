module.exports = function (app, database,bodyParser) {
	app.set('superSecret', database.secret); 
	//middlewares
	app.use(bodyParser.urlencoded({ extended: false }));  
	app.use(bodyParser.json());  

}