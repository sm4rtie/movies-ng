let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
let Buffer = mongoose.Schema.Types.Buffer;

//Define a schema
let Schema = mongoose.Schema;

/*let Movie = new Schema({
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

}, { _id: false });*/
let Movie = new Schema({ any: Schema.Types.Mixed });
module.exports = mongoose.model('MovieModel', Movie );
