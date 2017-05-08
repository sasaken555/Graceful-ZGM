const request = require('supertest');
const assert = require('power-assert');
const stubs = require('../routes/index');

describe('index.js test', function() {
  this.timeout(2000);
  const agent = request.agent('http://localhost:3000/')

  describe('GET /home', function() {
    it('should contact OK', function(done) {
      agent
        .get('home')
        .set('Accept', 'application/json')
        .expect(function(res) {
          assert(res.status === 200);
        })
        .end(function(err, res) {
          if(err) throw err;
          done();
        });
    });
  });

  describe('GET /list/map', function() {
    it('should contact OK', function(done) {
      agent
        .get('list/map')
        .set('Accept', 'application/json')
        .expect(function(res) {
          assert(res.status === 200);
        })
        .end(function(err, res) {
          if(err) throw err;
          done();
        });
    });
  });


  describe('GET /list/datas', function() {
    it('should contact OK', function(done) {
      agent
        .get('list/datas')
        .set('Accept', 'application/json')
        .expect(function(res) {
          assert(res.status === 200);
        })
        .end(function(err, res) {
          if(err) throw err;
          done();
        });
    });
  });

  describe('GET /getDatas/lat/lng', function() {
    it('should contact OK', function(done) {
      agent
        .get('getDatas/lat/lng')
        .set('Accept', 'application/json')
        .expect(function(res) {
          assert(res.status === 200);
        })
        .end(function(err, res) {
          if(err) throw err;
          done();
        });
    });
  });

  describe('GET /getMap/lat/lng', function() {
    it('should contact OK', function(done) {
      agent
      .get('getMap/lat/lng')
      .set('Accept', 'application/json')
      .expect(function(res) {
        assert(res.status === 200);
      })
      .end(function(err, res) {
        if(err) throw err;
        done();
      });
    });
  });

});
