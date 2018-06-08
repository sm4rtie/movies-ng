let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Comment = require('../models/Comment');

router.get('/comments', async(req, res) => {
  let imdbID = req.query['imdbID'];
  //let imdbID = req.body.imdbID;
try{
  if(imdbID) {
    let comments = await Comment.find({imdbID: imdbID});
    res.send(comments);
  }
  else {
     comments = await Comment.find({});
     res.send(comments);
    }
  } catch(err) {
        return res.status(500).send("Error");
       }
   });

router.post('/comments', async(req, res) => {
  let imdbID = req.body.imdbID;
  let comment = req.body.comment;
  if(!imdbID || !comment) {
    res.status(400);
    return res.status(500).send("Please provide movie ID and comment.")
  }
  else {
    try {
  let newComment = new Comment({imdbID: imdbID, comment: comment })
  await newComment.save();
      res.send(newComment);
} catch(err){
  return res.status(500).send("Error");

    }
  }

  });

module.exports = router;
