var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require('../models/Comment');
/* GET users listing. */

router.get('/comments', function(req, res, next) {
  console.log(req.query['imdbID']);
  var imdbID = req.query['imdbID'];
  console.log(imdbID);
  if(imdbID) {
    Comment.find({imdbID: imdbID}).then(function (comments) {
     res.send(JSON.stringify(comments));
     });
   }
   else {
     Comment.find({}).then(function (comments) {
      res.send(JSON.stringify(comments));
      });
   }
});

router.post('/comments', function(req, res, next) {
  var imdbID = req.query['imdbID'];
  var comment = req.query['comment'];
  var newComment = new Comment({imdbID: imdbID, comment: comment })
  newComment.save(function(err) {
    if (err) res.send(err);
    res.send(newComment);
  })


});
module.exports = router;
