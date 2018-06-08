let express = require('express');
let router = express.Router();
let request = require('request');
let mongoose = require('mongoose');
let Movie = require('../models/Movie');


router.post('/movies', async (req, res) => {

    let movieTitle = req.body.title;
    if (!movieTitle) {
        res.status(400);
        res.send('Please pass movie title');
    } else {
        request.get({
                url: 'http://www.omdbapi.com/?apikey=b5ba880d&',
                qs: {
                    t: movieTitle
                }
            },
            async (err, httpResponse, body) => {
                try {
                    let moviejson = JSON.parse(body);
                    let movies = await Movie.findOne({
                        'Title': moviejson.Title
                    });
                    if (!movies) {
                        let movie = await Movie.collection.insert(moviejson);
                    }
                    res.send(JSON.parse(body));
                } catch (err) {
                      return res.status(500).send(err);
                }
            });

    }
});

router.get('/movies', async (req, res) => {

    let query = req.query;
    let sort = {};
    let myobj;
    //sort descending
    if (query['sort']) {
        sort[query.sort] = -1;
        delete query['sort'];
    }
//search LIKE to allow querying by genre, actors etc
    for (let key in query) {
        if (query.hasOwnProperty(key)) {
            findLike = {
                $regex: '.*' + query[key] + '.*'
            };
            query[key] = findLike;
        }
    }
    try {
        let movies = await Movie.find(query).sort(sort);
        res.send(movies);
    } catch (err) {
        return res.status(500).send("Error");
    }
});

module.exports = router;
