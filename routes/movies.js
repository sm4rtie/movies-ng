var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');
var Movie = require('../models/Movie');

/* GET users listing. */
router.post ('/movies', function(req, res, next) {
/*  request({
    uri: 'http://www.omdbapi.com/?apikey=b5ba880d&',
    qs: {
          t: req.params.title
        }
  }).pipe(res);*/
  var movieTitle = req.query['title'];
  console.log(movieTitle);
  if(!movieTitle) res.send('Please pass movie title');
  else {
  request.get({
            url: 'http://www.omdbapi.com/?apikey=b5ba880d&',
            qs: {
              t: movieTitle
            }
        },
        function (err, httpResponse, body) {
            var moviejson = JSON.parse(body);
            var findByTitle = Movie.findOne({'Title': moviejson.Title}).then(function (movies) {
              if(!movies) {
            try {
              var movie = Movie.collection.insert(moviejson);
            } catch(err) {
              if (err) return handleError(err);
            }
          }
            /*ovie.save(function (err) {
              if (err) return handleError(err);
            });*/
            res.send(JSON.parse(body));
        });
  //console.log(res);

});
}
});

router.get('/movies', function(req, res, next) {
  var arr = Object.keys(req.query);
  var val = Object.values(req.query);
  var query = req.query;
    Movie.find(query).then(function (movies) {

   res.send(movies);

});


});

module.exports = router;
