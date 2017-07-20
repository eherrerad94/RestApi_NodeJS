

module.exports = (app) => {

    import tvShowCtrl from ('../controllers/tvShowCtrl');


    app.group('/tvShow', (router) => {

        router
            .get('/', tvShowCtrl.findAllTvShows)
            .post('/', tvShowCtrl.addTvShow)
            .get('/:id', tvShowCtrl.findTvShowById)
            .put('/:id', tvShowCtrl.updateTvShow)
            .delete('/:id', tvShowCtrl.deleteTvShow)

    });

};
