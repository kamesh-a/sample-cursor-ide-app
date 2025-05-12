const http = require('http');

describe('Server Tests', () => {
  let server;
  const testPort = 3001; // Use a different port for testing

  beforeAll((done) => {
    server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        date: new Date().toISOString(),
        counter: 1
      }, null, 2) + '\n');
    });
    server.listen(testPort, '127.0.0.1', done);
  });

  afterAll((done) => {
    if (server) {
      server.close(done);
    } else {
      done();
    }
  });

  test('Server responds with correct status code and JSON format', (done) => {
    http.get(`http://127.0.0.1:${testPort}`, (res) => {
      expect(res.statusCode).toBe(200);
      expect(res.headers['content-type']).toBe('application/json');

      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const response = JSON.parse(data);
        expect(response).toHaveProperty('date');
        expect(response).toHaveProperty('counter');
        expect(typeof response.date).toBe('string');
        expect(typeof response.counter).toBe('number');
        done();
      });
    }).on('error', (err) => {
      done(err);
    });
  });
});
