import mongoose from 'mongoose';
//import tvShow from mongoose.model('tvShow');
import tvShow from '../models/tvShow';

mongoose.Promise = Promise;


exports.findAllTvShows = (req, res) => {
    tvShow.find((err, tvShows) => {
        if (err)
            res.send(500, err.message)
        else {
            console.log('GET /tvShows')
            res.status(200).jsonp(tvshows)
        }
    })
}

exports.findTvShowById = (req, res) => {
    let id = req.params.id

    tvShow.findById(id, (err, tvShow) => {
        if (err)
            res.send(500, err.message)
        else {
            res.status(200).jsonp(tvShow)
        }
    })

}


exports.addTvShow = (req, res) => {

    let newTvShow = new tvShow({
        title: req.body.title,
        year: req.body.year,
        country: req.body.country,
        poster: req.body.poster,
        seasons: req.body.seasons,
        genre: req.body.genre,
        summary: req.body.summary
    })

    newTvShow.save((err, tvShow) => {
        if (err)
            res.status(500).send(err.message)
        else
            res.status(200).jsonp(tvShow)
    })
}

exports.updateTvShow = (req, res) => {
    let id = req.params.id;
    tvShow.findByIdAndUpdate(id, { $set: req.body }, (err, tvShow) => {
        if (err)
            res.status(500).send(err.message)
        else
            res.status(200).json(tvShow);
    })

}

exports.deleteTvShow = (req, res) => {
    let id = req.params.id;
    tvShow.remove({ _id: id }, (err, tvShow) => {
        if (err)
            res.status(500).send(err.message);
        else
            res.status(200).json(tvShow);
    })

}
/* Promises */
exports.findAllTvShowPromise = (req, res) => {

    tvShow
        .find({})
        .exec()
        .then((tvShows) => {
            console.log(tvShows);
            res.status(200).json(tvShows);
        })
        .catch((err) => {
            res.send('error ocurred');
        })
}

exports.findTvShowByIdPromise = (req, res) => {
    let id = req.params.id

    tvShow
        .findById(id)
        .exec()
        .then((tvShow) => {
            console.log(tvShow);
            res.status(200).json(tvShow);
        })
        .catch((err) => {
            console.log('an error ocurred', err.message)
            res.send('error ocurred ' + err.message);
        })


}

exports.addTvShowPromise = (req, res) => {

    let newTvShow = new tvShow({
        title: req.body.title,
        year: req.body.year,
        country: req.body.country,
        poster: req.body.poster,
        seasons: req.body.seasons,
        genre: req.body.genre,
        summary: req.body.summary
    })

    newTvShow
        .save()
        .exec()
        .then((tvShow) => {
            res.status(200).json(tvShow);
            console.log(tvShow);
        })
        .catch((err) => {
            console.log('error ocurred: ' + err.message);
            res.send('error ocurred ' + err.message);
        })
}

exports.updateTvShowPromise = (req, res) => {
    let id = req.params.id;
    tvShow
        .findByIdAndUpdate(id, { $set: req.body })
        .exec()
        .then((tvShow) => {
            res.status(200).json(tvShow);

        })
        .catch((err) => {
            console.log('error ocurred ' + err.message);
            res.send('error ocurred ' + err.message);
        })
}
exports.deleteTvShowPromise = (req, res) => {
    let id = req.params.id;

    tvShow
        .remove({ _id: id })
        .exec()
        .then((tvShow) => {
            console.log(tvShow + 'deleted');
            res.status(200).json(tvShow);
        })
        .catch((err) =>{
            console.log('An error ocurred: '+err.message)
            res.send('error ocurred: '+err.message)
        })

}