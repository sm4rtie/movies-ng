var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Buffer = mongoose.Schema.Types.Buffer;

//Define a schema
var Schema = mongoose.Schema;

var Movie = new Schema({
    title: String,
    year: String,
    rated: String,
    released: Date,
    runtime: String,
    genre: String,
    director: String,
    writer: String,
    actors: String,
    plot: String,
    language: String,
    country: String,
    awards: String,
    poster: Buffer,
    ratings: Array,
    metascore: Number,
    imdbRating: Number,
    imdbVotes: Number,
    imdbID: ObjectId,
    type: String,
    dvd: Date,
    boxOffice: String,
    production: String,
    website: String,

}, { _id: false });
module.exports = mongoose.model('MovieModel', Movie );
