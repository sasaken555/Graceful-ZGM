const request = require('supertest');
const assert = require('power-assert');
const stubs = require('../routes/stubs');

describe('stubs.js test', function() {
  describe('GET /stub/getLocation', function() {
    this.timeout(2000);
    const agent = request.agent('http://localhost:3000/')
    const answer = { lat: 35, lng: 135 };

    it('should contact OK', function(done) {
      agent
        .get('stub/getLocation')
        .set('Accept', 'application/json')
        .expect(function(res) {
          assert(res.status === 200);
        })
        .end(function(err, res) {
          if(err) throw err;
          done();
        });
    });

    it('should return target JSON', function(done) {
      agent
        .get('stub/getLocation')
        .set('Accept', 'application/json')
        .expect(function(res) {
          assert(res.body.lat === answer.lat);
          assert(res.body.lng === answer.lng);
        })
        .end(function(err, res) {
          if(err) throw err;
          done();
        });
    });

  });
});
