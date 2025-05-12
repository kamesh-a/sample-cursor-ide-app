const http = require('http');

describe('Server Tests', () => {
  let server;
  const testPort = 3001; // Use a different port for testing

  beforeAll((done) => {
    server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, World!\n');
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

  test('Server responds with correct status code and message', (done) => {
    http.get(`http://127.0.0.1:${testPort}`, (res) => {
      expect(res.statusCode).toBe(200);
      expect(res.headers['content-type']).toBe('text/plain');

      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        expect(data).toBe('Hello, World!\n');
        done();
      });
    }).on('error', (err) => {
      done(err);
    });
  });
});
