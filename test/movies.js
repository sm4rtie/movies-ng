require('dotenv').config();
let mongoose = require("mongoose");
let Movie = require('../models/Movie');
let chai = require('chai');
let chaiHttp = require('chai-http');
let chaiThings = require('chai-things');
let server = require('../app');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);
chai.use(chaiThings);

describe('Movies', () => {

  describe('/GET movie', () => {
      it('it should GET all the movies', (done) => {
        chai.request(server)
            .get('/movies')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.should.have.lengthOf.above(2);
                res.body.should.all.have.property('Year');
              done();
            });
      });
  });

  describe('/POST movie', () => {
      it('it should POST movie', (done) => {
        let movie = {
            title: "The Lord of the Rings"
          }
        chai.request(server)
            .post('/movies')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(movie)
          //  .query({title: 'Lord of the Rings'})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.should.have.property('Year');
              done();
            });
      });
  });

});
