//API Routes for TvShowRoutes

module.exports = function(app,Ctrl){


	app.group('/tvshows', (router) => 
		{
			router.get("/",Ctrl.findAllTVShows);
			router.post("/",Ctrl.addTVShow);

			router.get("/:id",Ctrl.findById);
			router.put("/:id",Ctrl.updateTVShow)
			router.delete("/:id",Ctrl.deleteTVShow);

		});

}