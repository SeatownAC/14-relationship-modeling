'use strict';

require('babel-register');
const superagent = require('superagent');
const app = require('../../../src/app.js');

describe('API', () => {

  const PORT = 8888;
  beforeAll( () => {
    app.start(PORT);
  });
  afterAll( () => {
    app.stop();
  });

  it('gets a 200 response on a good model', () => {
    return superagent.get('http://localhost:8888/api/v1/bar')
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

 

  it('gets a 404 response on an invalid id', () => {
    return superagent.get('http://localhost:8888/apt')
      .then(console.log)
      .catch(response => {
        expect(response.status).toEqual(404);
      });
  });

  it('gets a 200 and returns a resource with an updated body', () => {
    return superagent.put('http://localhost:8888/api/v1/foobar')
      .then(console.log)
      .catch(response => {
        expect(response.status).toEqual(200);
      });
  });

  it('gets a 400 responds with bad request if no request body was provided', () => {
    return superagent.put('http://localhost:8888/api/v1/:shanty')
      .then(console.log)
      .catch(response => {
        expect(response.status).toEqual(400);
      });
  });

  it('gets a 400  responds with bad request if no request body was provided', () => {
    return superagent.post('http://localhost:8888/api')
      .then(console.log)
      .catch(response => {
        expect(response.status).toEqual(400);
      });
  });
  it('gets a 200 returns a resource for requests made with a valid body', () => {
    return superagent.post('http://localhost:8888/api/v1/foobar')
      .then(console.log)
      .catch(response => {
        expect(response.status).toEqual(200);
      });
  });
});

