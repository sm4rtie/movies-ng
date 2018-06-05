var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

//Define a schema
var Schema = mongoose.Schema;

var Comment = new Schema({

    imdbID: String,
    comment: String

});
module.exports = mongoose.model('CommentModel', Comment );
