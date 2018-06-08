 require('dotenv').config();
let mongoose = require("mongoose");
let Book = require('../models/Movie');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let chaiThings = require('chai-things');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
chai.use(chaiThings);

describe('Comments', () => {

  describe('/GET comments', () => {
      it('it should GET all the comments', (done) => {
        chai.request(server)
            .get('/comments')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.should.all.have.property('imdbID');
              done();
            });
      });
  });

  describe('/POST comment', () => {
      it('it should POST comment', (done) => {
        let comment = {
            imdbID: 'tt0077869',
            comment: 'part 2 of 2'
          }
        chai.request(server)
            .post('/comments')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(comment)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.should.have.property('comment');
              done();
            });
      });
  });

});
