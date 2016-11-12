//API Routes for User

module.exports = function(app,Ctrl){

	app.group('/users', (router) => 
		{
      router.get("/",Ctrl.findAllUsers);
			router.post("/",Ctrl.addUser);
      router.post('/authenticate',Ctrl.authenticate);
			router.get("/:id",Ctrl.findById);
			router.put("/:id",Ctrl.updateUser)
			router.delete("/:id",Ctrl.deleteUser);

		});

}