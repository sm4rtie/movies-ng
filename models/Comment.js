let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

//Define a schema
let Schema = mongoose.Schema;

let Comment = new Schema({

    imdbID: String,
    comment: String

});
module.exports = mongoose.model('CommentModel', Comment );
