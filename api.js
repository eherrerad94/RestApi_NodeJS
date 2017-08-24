var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('express-group-routes');
var logger = require('morgan')
var port = process.env.PORT || 3000;
var config = require('./config/db');



// var app = express();

//     app.use(bodyParser.urlencoded({extended: true}));
//     app.use(bodyParser.json());
//     app.use(methodOverride());


mongoose.connection.openUri(config.url, function (err, database) {

    if (err) {
        console.log(err);
        process.exit(1);
    }

})

app.listen(port, function () {
    console.log("Server running on port " + port)
});



import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from 'express-group-routes';
import methodOverride from 'method-override';
import logger from 'morgan';
import config from './config.db';

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(methodOverride());

mongoose.Promise = global.Promise;
mongoose.connection.openUri(config.url, (err, db) => {
    if (err) {
        console.log(err)
        process.exit(1);
    }
    console.log('Connected to dabatase ', config.database)
});


let router = express();

router.get('/', (req, res) => {
    res.send('Hello world');
});

//API Routes
const PATH_API = config.pathApi; //if u want to change go to ./config/db.js
import tvShows from './api/routes/tvShowRoutes';
app.use(router);
app.use(PATH_API, tvShows);

app.listen(port, () => {
    console.log("Server running on port ", port)
});
